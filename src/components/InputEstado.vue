<template>

    <InputBase label="Estado*" >
        <b-form-select v-model="estadoSelecionado" 
        :options="estados"
        :class="invalido"
        required
        >
            <template #first>
                <b-form-select-option value="" disabled>Selecione</b-form-select-option>
            </template>
        </b-form-select>
            <div class="erro" v-if="!$v.estadoSelecionado.required && $v.$dirty">Campo obrigatório!</div>
    </InputBase>

</template>

<script>

import InputBase from "./InputBase.vue"
import api from "../api"
import store from "../store"
import { required } from "vuelidate/lib/validators"
import {submitLockReleaser } from "../utils"

export default {
    name: "InputEstado",

    data(){
        return{
            estadoSelecionado: "",
            estados: [],
            carregado: false
        }
    },

    components:{
        InputBase
    },

    async created(){

        this.estadoSelecionado = store.state.estado

        const response = await api.get("/estados")
        response.data.forEach(element => {
            this.estados.push({value: element.id,
                               text: element.nome})
        });

        this.carregado = true

    },



    computed: {
        invalido() {
            console.log(this.$v.$dirty)
            console.log(this.$v.$invalid)
            console.log(this.$v.estadoSelecionado.required)
            if (this.$v.$dirty && this.$v.$invalid) {
                return 'form-control erro';
            }

            return 'form-control';
        }
    },

    watch:{
        estadoSelecionado(novoEstado){
            if (this.carregado){
                this.$v.$touch()
                store.state.estado = novoEstado
                this.$root.$emit("reloadCidades")
                submitLockReleaser(this.$v.$invalid)
                console.log(this.$v.form.nome)
            }


        }
    },

    validations:{
        estadoSelecionado : {
            required,
        }
    }

}
</script>

<style scoped>
</style>
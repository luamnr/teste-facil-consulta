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
            <div class="erro" v-if="!$v.estadoSelecionado.required && invalido">Campo obrigatório!</div>
    </InputBase>

</template>

<script>

import InputBase from "./InputBase.vue"
import api from "../services/Api"
import store from "../store"
import { required } from "vuelidate/lib/validators"


export default {
    name: "InputEstado",

    data(){
        return{
            estadoSelecionado: "",
            estados: []
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

    },

    computed: {
        invalido () {
            if (this.$v.$dirty && this.$v.$invalid) {
                return 'form-control erro';
            }

            return 'form-control';
        }
    },

    watch:{
        estadoSelecionado(novoEstado){
            this.$v.$touch()
            store.state.estado = novoEstado
            this.$root.$emit("reloadCidades")
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
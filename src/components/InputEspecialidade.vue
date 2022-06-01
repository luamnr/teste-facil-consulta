<template>

    <InputBase label="Especialidade Principal*" >
        <b-form-select v-model="especialidadeSelecionado" 
        :options="especialidades"
        :class="invalido"
        required
        >
            <template #first>
                <b-form-select-option value="" disabled>Selecione</b-form-select-option>
            </template>
        </b-form-select>
        <div class="erro" v-if="!$v.especialidadeSelecionado.required && $v.$dirty">Campo obrigatório!</div>

    </InputBase>

</template>

<script>

import InputBase from "./InputBase.vue"
import api from "../api"
import { required } from "vuelidate/lib/validators"
import {submitLockControl} from "../utils"
import store from "../store"

export default {
    name: "InputEspecialidade",

    data(){
        return{
            especialidadeSelecionado: "",
            especialidades: [],
        }
    },

    async created(){

        const response = await api.get(`/especialidades?estadoId=${this.estadoId}`)
        response.data.forEach(element => {
            this.especialidades.push({value: element.id,
                            text: element.nome})
        });

        if (store.state.especialidades && store.state.especialidades.length == 0){
            store.state.especialidades = this.especialidades
        }

        if (store.state.especialidade){
            this.especialidadeSelecionado = store.state.especialidade
        }
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
        especialidadeSelecionado(novaEspecialidade){
            this.$v.$touch()
            store.state.especialidade = novaEspecialidade
            submitLockControl(this.$v.$invalid)
            
        },
    },

    validations:{
        especialidadeSelecionado: {
            required,
        }
    },

    components:{
        InputBase
    },

}
</script>

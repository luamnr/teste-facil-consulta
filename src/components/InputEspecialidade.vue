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
import {submitLockReleaser} from "../utils"
import store from "../store"

export default {
    name: "InputEspecialidade",

    data(){
        return{
            especialidadeSelecionado: "",
            especialidades: [],
            carregado: false
        }
    },

    async created(){

        const response = await api.get(`/especialidades?estadoId=${this.estadoId}`)
        response.data.forEach(element => {
            this.especialidades.push({value: element.id,
                            text: element.nome})
        });
        this.carregado = true
    },

    mounted(){
        this.especialidadeSelecionado = store.state.especialidade
    },

    computed: {
        invalido () {
            if (this.$v.$dirty && this.$v.$invalid) {
                return 'form-control erro';
            }

            return 'form-control';
        }
    },

    methods:{

    },

    watch:{
        especialidadeSelecionado(novaEspecialidade){
            this.$v.$touch()
            if (this.carregado){
                store.state.especialidade = novaEspecialidade
                submitLockReleaser(this.$v.$invalid)
            }
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

<style scoped>
</style>
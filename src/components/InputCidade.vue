<template>

    <InputBase label="Cidade*" >
        <b-form-select v-model="cidadeSelecionada" 
        :options="cidades"
        :class="invalido"
        required
        >
            <template #first>
                <b-form-select-option value="" disabled>Selecione</b-form-select-option>
            </template>
        </b-form-select>
            <div class="erro" v-if="!$v.cidadeSelecionada.required && $v.$dirty">Campo obrigatório!</div>
    </InputBase>

</template>

<script>
import store from "../store"
import InputBase from "./InputBase.vue"
import api from "../api"
import { required } from "vuelidate/lib/validators"
import {submitLockReleaser} from "../utils"

export default {
    name: "InputCidade",

    data(){
        return{
            cidadeSelecionada: "",
            cidades: [],
            estadoId: "",
            carregado: false
        }
    },

    async created(){

        this.$root.$on("reloadCidades", ()=>{
            if (store.state.estado != this.estadoId){
                this.estadoId = store.state.estado
                this.cidadeSelecionada = ""
                this.requestCidades()
            }
        })
    },

    components:{
        InputBase
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
        async requestCidades(){

            let tempCidades = []

            const response = await api.get(`/cidades?estadoId=${this.estadoId}`)
            response.data.forEach(element => {
                tempCidades.push({value: element.id,
                                text: element.nome})
            });
            this.cidades = tempCidades
            this.carregado = true
        }
    },

    watch:{
        cidadeSelecionada(novaCidade){
            if (this.carregado){
                this.$v.$touch()
                store.state.cidade = novaCidade
                submitLockReleaser(this.$v.$invalid)
            }
        },
    },

    validations:{
        cidadeSelecionada : {
            required,
        }
    }
}
</script>

<style scoped>
</style>
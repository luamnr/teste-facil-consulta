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
import {submitLockControl} from "../utils"

export default {
    name: "InputCidade",

    data(){
        return{
            cidadeSelecionada: "",
            cidades: [],
            estadoId: "",
        }
    },

    async created(){

        
        if (store.state.cidade && store.state.estado){
            this.estadoId = store.state.estado
            this.requestCidades()
            this.cidadeSelecionada = store.state.cidade
        }  

        this.$root.$on("reloadCidades", ()=>{
            if (store.state.estado != this.estadoId){
                this.estadoId = store.state.estado
                this.cidadeSelecionada = ""
                store.state.cidades = []
                submitLockControl(this.$v.$invalid)
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
         
        if (store.state.cidades && store.state.cidades.length == 0){
            store.state.cidades = this.cidades
        }
        
        }
    },

    watch:{
        cidadeSelecionada(novaCidade){
            this.$v.$touch()
            store.state.cidade = novaCidade
            submitLockControl(this.$v.$invalid)
        },
    },

    validations:{
        cidadeSelecionada : {
            required,
            // minLength: minLength(3),

        }
    }
}
</script>

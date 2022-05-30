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
            <div class="erro" v-if="!$v.cidadeSelecionada.required && invalido">Campo obrigatório!</div>
    </InputBase>

</template>

<script>
import store from "../store"
import InputBase from "./InputBase.vue"
import api from "../services/Api"
import { required } from "vuelidate/lib/validators"


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

        this.estadoId = store.state.estado
        this.requestCidades()
        this.cidadeSelecionada = store.state.cidade

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
            console.log(this.cidadeSelecionada)

            response.data.forEach(element => {
                tempCidades.push({value: element.id,
                                text: element.nome})
            });
            this.cidades = tempCidades
        }
    },

    watch:{
        cidadeSelecionada(novaCidade){
            this.$v.$touch()
            console.log("Watch cidade"+novaCidade)
            store.state.cidade = novaCidade
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
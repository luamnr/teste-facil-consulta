<template>

    <InputBase label="Cidade*" >
        <b-form-select v-model="cidadeSelecionada" 
        :options="cidades"
        class="form-control"
        required
        >
            <template #first>
                <b-form-select-option value="" disabled>Selecione</b-form-select-option>
            </template>
        </b-form-select>
    </InputBase>

</template>

<script>

import InputBase from "./InputBase.vue"
import api from "../services/Api"


export default {
    name: "InputCidade",

    data(){
        return{
            cidadeSelecionada: "",
            cidades: []
        }
    },

    async created(){

        this.$root.$on("reloadCidades", ()=>{
            this.cidadeSelecionada = ""
            this.requestCidades()
        })


        // if (localStorage.cidade){
        //     this.cidadeSelecionada = localStorage.cidade
        // }

        // let estadoId = localStorage.estado

        // const response = await api.get(`/cidades?estadoId=${estadoId}`)
        // console.log(this.cidadeSelecionada)
        // response.data.forEach(element => {
        //     this.cidades.push({value: element.id,
        //                        text: element.nome})
        // });
    },

    components:{
        InputBase
    },
    
    methods:{
        async requestCidades(){
            if (localStorage.cidade){
                this.cidadeSelecionada = localStorage.cidade
            }

            let estadoId = localStorage.estado
            let tempCidades = []

            const response = await api.get(`/cidades?estadoId=${estadoId}`)
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
            console.log("Watch cidade"+novaCidade)
            localStorage.cidade = novaCidade
        },

    }
}
</script>

<style scoped>
</style>
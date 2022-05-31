<template>


    <div class="containerForms" >
        <b-form class="areaForm">

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Nome completo</strong><br>
                    {{ getStore().nome }}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>CPF</strong><br>
                    {{ getStore().cpf }}
                </b-col>
            </b-row>


            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>número de celular ou telefone</strong><br>
                    {{ getStore().telefone }}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Estado/Cidade</strong><br>
                    {{ getStore().estado }}-{{getStore().cidade}}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Especialidade principal</strong><br>
                    {{ getStore().especialidade}}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Preço da consulta</strong><br>
                    {{ getStore().preco }}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Formas de pagamento da consulta</strong><br>
                    {{ getStore().pagamento }} - {{getStore().parcelamento}}
                </b-col>
            </b-row>


            <b-row class="rowForm" align-self="center">

                <b-col cols="11">
                    <!-- <BotaoSubmit :local="{path: 'pagina3'}"/> -->
                </b-col>

            </b-row>


       </b-form>
        
    </div>
</template>

<script>

// import BotaoSubmit from "./BotaoSubmit"
import store from "../store"

export default {
    name: "FormulariosPaginaDois",

    data(){
        return{

        }
    },

    methods:{
        getStore(){
            console.log(typeof(store.state))
            return store.state
        }
    },

    components:{
        // BotaoSubmit,

    },

    mounted(){
        this.objetos = store.state.nome
    }
}
</script>

<style>

</style>
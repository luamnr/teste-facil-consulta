<template>
    <b-form-group label="Formas de pagamento da consulta">
        <b-form-checkbox-group
        v-model="selecionado"
        :options="opcoesPagamento"
        plain
        stacked
        class=""
      >


        </b-form-checkbox-group>
        <div class="erro" v-if="!$v.selecionado.required && $v.$dirty">Campo obrigatório!</div>
        <p v-if="opcoesCartao"><InputOpcoesParcelamento/></p>
    </b-form-group>
</template>

<script>

import { required } from "vuelidate/lib/validators";
import store from "../store";
import InputOpcoesParcelamento from "./InputOpcoesParcelamento";


export default {
    name: "InputFormaPagamento",

    data(){

        return {
            selecionado: [],
            opcoesPagamento: [
                {"text": "Em dinheiro", value: "1"},
                {"text": "Pix", value: "2"},
                {"text": "Cartão de crédito", value: "3"}  
            ],
        }
    },
    
    mounted(){
        if (store.state.pagamento.length > 0){
            this.selecionado = store.state.pagamento;
        }

        if (store.state.pagamentos && store.state.pagamentos.length == 0){
            store.state.pagamentos = this.opcoesPagamento;
        }
    },

    computed:{
        opcoesCartao(){
            return this.selecionado.includes("3") ? true : false;
        },

        invalido () {
            if (this.$v.$dirty && this.$v.$invalid) {
                return 'erro';
            }
            return '';
        }
    },

    watch:{
        selecionado(novaForma){
            this.$v.$touch();
            store.state.pagamento = novaForma;
            
        }
    },

    validations:{
        selecionado:{
            required,


        }
    },

    components:{
        InputOpcoesParcelamento
    }
}
</script>

<style>
    .form-check{
        margin-left: 10%;
        padding: 1%;
        padding-top: 3%;
        padding-bottom: 3%;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px;
        border-color: grey;
        border-style: solid;
    }
</style>
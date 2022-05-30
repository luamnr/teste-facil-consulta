<template>
    <b-form-group label="Plain stacked radios">
      <b-form-radio-group
        v-model="selecionado"
        :options="opcoesPagamento"
        name="plain-stacked"
        plain
        stacked
      >
        <template>
            <b-form-radio class="opcaoPagamento"></b-form-radio>
        </template>
      </b-form-radio-group>
      <p v-if="opcoesCartao">teste</p>
    </b-form-group>
</template>

<script>
export default {
    name: "InputFormaPagamento",
    data(){

        return {
            selecionado: "",
            opcoesPagamento: [
                {"text": "Em dinheiro", value: "1"},
                {"text": "Pix", value: "2"},
                {"text": "Cartão de crédito", value: "3"}  
            ],
        }
    },
    
    computed:{
        opcoesCartao(){
            return this.selecionado == 3 ? true : false
        }
    }
}
</script>

<style>
    .opcaoPagamento{
        background-color: red;
        padding: 1%;
        border: black 1px solid;
    }
</style>
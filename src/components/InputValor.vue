<template>
      <InputBase label="Informe o preço da consulta*" >
        <b-input-group 
            class="inputIcon" prepend="R$">
            <b-form-input
            v-money="money"
            :maxlength="6"
            v-model="preco" 
            type="text" 
            placeholder="Valor"
            required
            min="30"
            max="350"
            >
            </b-form-input>
        </b-input-group>

    </InputBase>
</template>

<script>
import InputBase from "./InputBase.vue"


export default {
    name: "InputValor",

    data(){
        return{
        preco: 0.0,
        money: {
                decimal: ',',
                // suffix: '',
                precision: 2,
                masked: false
            }
        }
    },

    components:{
        InputBase,
    }
}
</script>

<style>
.input-group-text, .input-group-prepend{
    background-color: #483698;
    color: white;
    border: #483698;
}

</style>
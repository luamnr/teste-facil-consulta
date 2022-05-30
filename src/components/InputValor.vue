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
import store from "../store"
import {submitLockReleaser} from "../utils"

export default {
    name: "InputValor",

    data(){
        return{
            preco: 0.0,
            carregado: false,
            money: {
                    decimal: ',',
                    precision: 2,
                    masked: false
                },
        }
    },

    mounted(){
        this.preco = store.state.preco
        this.carregado = true
    },

    watch:{
        nome(novoPreco){
            if (this.carregado){
                this.$v.$touch()
                store.state.preco = novoPreco
                submitLockReleaser(this.$v.$invalid)
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
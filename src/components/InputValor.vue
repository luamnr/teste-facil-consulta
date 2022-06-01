<template>
      <InputBase label="Informe o preço da consulta*" >
        <b-input-group 
            class="inputIcon" prepend="R$">
            <b-form-input
            v-money="money"
            :maxlength="6"
            v-model="preco" 
            type="text" 
            placeholder="0,00"
            required
            :class="invalido"
            >
            </b-form-input>
        </b-input-group>
        <div class="erro" v-if="!$v.preco.required && $v.$dirty">Campo obrigatório!</div>
        <div class="erro" v-else-if="!$v.preco.precoMenor && $v.$dirty">O preço está muito baixo!</div>
        <div class="erro" v-else-if="!$v.preco.precoMaior && $v.$dirty">O preço está muito alto!</div>

    </InputBase>
</template>

<script>

import InputBase from "./InputBase.vue"
import store from "../store"
import {submitLockControl} from "../utils"
import { required,  } from "vuelidate/lib/validators"
import { precoMenor, precoMaior } from "../utils"

export default {
    name: "InputValor",

    data(){
        return{
            preco: "0,00",
            money: {
                    decimal: ',',
                    precision: 2,
                    masked: false
                },
        }
    },

    created(){
        if (store.state.preco){
            this.preco = store.state.preco;
        }
        
    },

    mounted(){
    },

    watch:{
        preco(novoPreco){
            this.$v.$touch();
            store.state.preco = novoPreco;
            submitLockControl(this.$v.$invalid);
        }
    },

    computed: {
        invalido () {

            if (this.$v.$dirty && this.$v.$invalid) {
                return 'erro';
            }
            return '';
        }
    },

    components:{
        InputBase,
    },

    validations:{
        preco:{
            required,
            precoMenor,
            precoMaior

        }
    }
}
</script>

<style scoped>
.input-group-text, .input-group-prepend{
    background-color: #483698;
    color: white;
    border: #483698;
}

</style>
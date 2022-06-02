<template>
    <InputBase label="Nome Completo*">
    <b-form-input
        v-model="nome"
        placeholder="Digite o nome completo"
        :class="invalido" 
    ></b-form-input>

    <div class="erro" v-if="!$v.nome.required && $v.$dirty">Campo obrigatório!</div>
    <div class="erro" v-else-if="!$v.nome.minLength && $v.$dirty">Nome muito pequeno!</div>
    <div class="erro" v-else-if="!$v.nome.maxLength && $v.$dirty">Nome muito grande!</div>


    </InputBase>


</template>

<script>

import { required, minLength, maxLength } from "vuelidate/lib/validators";
import InputBase from "./InputBase";
import store from "../store";

export default {
    nome: "InputNome",
    data(){
        return{
            nome: "",
        }
    },

    components:{
        InputBase
    },

    mounted(){
        if (store.state.nome){
            this.nome = store.state.nome

        }
    },

    watch:{
        nome(novoNome){
            this.$v.$touch();
            store.state.nome = novoNome;
            
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

    validations:{
        nome : {
            required,
            minLength: minLength(3),
            maxLength: maxLength(45),


        }
    }
}
</script>

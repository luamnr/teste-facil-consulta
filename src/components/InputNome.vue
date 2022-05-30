<template>
    <InputBase label="Nome Completo*">
    <b-form-input
        v-model="nome"
        placeholder="Digite o nome completo"
        :class="invalido" 
    ></b-form-input>

    <!-- TODO desvendar por que dirty e nome required nao estao
    dando o efeito desejado ao digitar um nome e apagar o v-if nao aparece, porem a computed invalido
    atualiza a classe da borda vermelha -->
    <div class="erro" v-if="!$v.nome.required && $v.$dirty">Campo obrigatório!</div>
    <div class="erro" v-else-if="!$v.nome.minLength && $v.$dirty">Nome muito pequeno!</div>
    <div class="erro" v-else-if="!$v.nome.maxLength && $v.$dirty">Nome muito grande!</div>


    </InputBase>


</template>

<script>

import { required, minLength, maxLength } from "vuelidate/lib/validators"
import InputBase from "./InputBase"
import store from "../store"
import {submitLockReleaser, lockSubmitlocker} from "../utils"

export default {
    nome: "InputNome",
    data(){
        return{
            nome: "",
            carregado: false
        }
    },

    components:{
        InputBase
    },

    mounted(){
        this.nome = store.state.nome
        this.carregado = true
        lockSubmitlocker()
    },

    watch:{
        nome(novoNome){
            console.log("watch nome")
            if (this.carregado){
                this.$v.$touch()
                store.state.nome = novoNome
                submitLockReleaser(this.$v.$invalid)
            }
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

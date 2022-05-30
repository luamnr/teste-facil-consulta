<template>
<InputBase label="Telefone*">
    <b-form-input
        v-model="telefone"
        v-mask="'(##) # ####-####'"
        :class="invalido"
        maxLength="16"
        placeholder="(00) 0 0000-0000"
        required
    >
    </b-form-input>
    <div class="erro" v-if="!$v.telefone.required && $v.$dirty">Campo obrigatório!</div>
    <div class="erro" v-else-if="!$v.telefone.length && $v.$dirty">Número inválido</div>

</InputBase>
</template>

<script>
import { required,  } from "vuelidate/lib/validators"
import InputBase from "./InputBase.vue"
import store from "../store"
import {telefoneLenghtValidator} from "../utils"
import {submitLockReleaser} from "../utils"


export default {
    name: "InputTelefone",
    
    data(){
        return{
            telefone: "",
            carregado: false
        }
    },

    components:{
        InputBase
    },

    mounted(){
        this.telefone = store.state.telefone
        this.carregado = true
    },

    watch:{
        telefone(novoTelefone){
            if (this.carregado){
                this.$v.$touch()
                store.state.telefone = novoTelefone
                console.log(this.$v.$invalid)
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
        },
    },

    validations:{
        telefone : {
            required,
            length: telefoneLenghtValidator

        }    
    }

}

</script>

<style>

</style>
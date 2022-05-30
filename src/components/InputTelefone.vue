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
    <div class="erro" v-if="!$v.telefone.required && $v.dirty">Campo obrigatório!</div>
    <div class="erro" v-else-if="!$v.telefone.length && $v.dirty">Número inválido</div>

</InputBase>
</template>

<script>
import { required,  } from "vuelidate/lib/validators"
import InputBase from "./InputBase.vue"
import store from "../store"

// testar melhor lenghtvalidator
function lenghtValidator (valor){
    if (valor.length == 16){
        return false
    }
    else{
        return true
    }
}

export default {
    name: "InputTelefone",
    data(){
        return{
            telefone: ""
        }
    },
    components:{
        InputBase
    },

    mounted(){
        this.telefone = store.state.telefone
    },

    watch:{
        telefone(novoTelefone){
            this.$v.$touch()
            store.state.telefone = novoTelefone
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
            length: lenghtValidator
            // Length: (value) => {
            //     if (value.length == 16){
            //         return true
            //     }
            //     else false
            // }
        }    
    }

}

</script>

<style>

</style>
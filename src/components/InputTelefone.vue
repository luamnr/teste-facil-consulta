<template>
<InputBase label="Telefone">
    <b-form-input
        v-model="telefone"
        v-mask="'(##) # ####-####'"
        :class="invalido"
        maxLength="16"
        placeholder="(00) 0 0000-0000"
        required
    >
    </b-form-input>
    <div class="erro" v-if="!$v.telefone.required && invalido">Campo obrigatório!</div>
    <div class="erro" v-if="!$v.telefone.minLength && invalido">Número inválido</div>
    <div class="erro" v-if="!$v.telefone.maxLength && invalido">Número inválido</div>

</InputBase>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators"
import InputBase from "./InputBase.vue"
import store from "../store"

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
        }
    },
    validations:{
        telefone : {
            required,
            minLength: minLength(16),
            maxLength: maxLength(16),
        }    
    }

}

</script>

<style>

</style>
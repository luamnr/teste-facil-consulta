<template>

    <InputBase label="CPF*" >
        <b-form-input v-mask="'###.###.###-##'"
        :maxlength="14"
        v-model="cpf" 
        type="text" 
        pattern="\d*"
        inputmode="numeric"
        :class="invalido"
        placeholder="Digite um cpf"
        required
        >
        </b-form-input>
        <div class="erro" v-if="!$v.cpf.required && $v.$dirty">Campo obrigatório!</div>
        <div class="erro" v-else-if="!$v.cpf.cpfCadastrado && $v.$dirty">CPF já cadastrado!</div>
        <div class="erro" v-else-if="!$v.cpf.testaCPF && $v.$dirty">CPF inválido!</div>


    </InputBase>

</template>

<script>

import InputBase from "./InputBase.vue";
import store from "../store";
import { required } from "vuelidate/lib/validators";
import { testaCPF, cpfCadastrado } from "../utils";


export default {
    name: "InputCPF",

    data(){
        return{
            cpf: "",
        }
    },
    components:{
        InputBase
    },

    mounted(){
        if (store.state.cpf){
            this.cpf = store.state.cpf;
        }
    },

    watch:{
        cpf(novoCPF){
            this.$v.$touch();
            store.state.cpf = novoCPF;
        }
    },

    computed: {
        invalido () {
            if (this.$v.$dirty && this.$v.$invalid) {
                return 'erro'
            }
            return ''
        }
    },

    validations:{
        cpf : {
            required,
            cpfCadastrado: cpfCadastrado,
            testaCPF : testaCPF

        }
    } 
}
</script>

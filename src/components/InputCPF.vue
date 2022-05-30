<template>

    <InputBase label="CPF*" >
        <b-form-input v-mask="'###.###.###-##'"
        :maxlength="14"
        v-model="cpf" 
        type="text" 
        placeholder="Digite um cpf"
        required
        >
        </b-form-input>
    </InputBase>

</template>

<script>
// import store from "../store"

import InputBase from "./InputBase.vue"
import store from "../store"


export default {
    name: "InputCPF",
    data(){
        return{
            cpf: ""
        }
    },
    components:{
        InputBase
    },

    mounted(){
        this.cpf = store.state.cpf
    },

    watch:{
        cpf(novoCPF){
            store.state.cpf = novoCPF 
        }
    }
}
</script>

<style scoped>
</style>
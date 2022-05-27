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

import InputBase from "./InputBase.vue"

export default {
    name: "InputCPF",
    data(){
        return{
            cpf: ""
        }
    },
    components:{
        InputBase
    }
}
</script>

<style scoped>
</style>
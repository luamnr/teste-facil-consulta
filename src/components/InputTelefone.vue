<template>
<InputBase label="Telefone">
    <b-form-input
        v-model="telefone"
        v-mask="'(##) # ####-####'"

        maxLength="16"
        placeholder="(00) 0 0000-0000"
        required
    >
    </b-form-input>
</InputBase>
</template>

<script>
import InputBase from "./InputBase.vue"

export default {
    name: "InputTelefone",
    data(){
        return{
            telefone: ""
        }
    },
    components:{
        InputBase
    }

}

</script>

<style>

</style>
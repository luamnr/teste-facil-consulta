<template>
    <InputBase label="Nome Completo*">
    <b-form-input
        v-model="nome"
        placeholder="Digite o nome completo"
        class="testes"
        required
    ></b-form-input>
    </InputBase>


</template>

<script>
import InputBase from "./InputBase.vue"

export default {
    nome: "InputNome",
    data(){
        return{
            nome: ""
        }
    },
    components:{
        InputBase
    },
    created(){
        if (localStorage.nome){
            this.nome = localStorage.nome
        }
    },
    watch:{
        nome(novoNome){
            localStorage.nome = novoNome 
            console.log(novoNome)
        }
    }
}
</script>

<style scoped>

</style>
<template>

<div>

    <b-alert
      :show="dismissCountDown"
      class="alerta"
      fade
      variant="warning"
      @dismiss-count-down="countDownChanged"
    >
      Preencha todos os campos!
    </b-alert>
    <b-button @click="mudarRota(local)" :class="colorClass">
        {{ textoBotao }}
    </b-button>

</div>

</template>

<script>


import { getSubmitLocker, lockSubmitlocker, validadorPagUm, validadorPagDois, limparStore } from '../utils'
import store from "../store"

export default {
    name: "BotaoSubmit",

    data(){
        return { 
            dismissCountDown: 0
        }
    },
 
    props:[
        "local",
        "textoBotao",
        "cor",
        "cadastrar"
    ],

    methods:{
        mudarRota(local){

            if (this.cadastrar){
                
                this.$router.push(local)
                
                // gerar um id aleatorio depois do 20 possiveis 100
                let medicoId = Math.floor(Math.random() * 100) + 20;
                
                store.state.todosMedicos.push({
                    id: medicoId, 
                    nome: store.state.nome, 
                    cpf: store.state.cpf, 
                    cidadeId: store.state.cidade,
                    especialidadeId: store.state.especialidade
                })

                limparStore()

            }

            if (getSubmitLocker()){
                this.showAlert()
                return
            }

            if (this.$router.currentRoute.path == "/"){
                if (!validadorPagUm()){
                    this.showAlert()
                    return
                }
            }

            if (this.$router.currentRoute.path == "/pagina2"){
                if (!validadorPagDois()){
                    this.showAlert()
                    return
                }
            }

            this.$router.push(local)
            lockSubmitlocker()
        },

        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        
        showAlert() {
            this.dismissCountDown = 3
        }

    },

    computed:{
        colorClass(){
            if (this.cor == "amarelo"){
                return "form-control amarelo BotaoSubmit";
            }
            else if(this.cor == "roxo"){
                return "form-control roxo BotaoSubmit";
            }
            else{
                return "form-control branco BotaoSubmit";
            }

        },

    }
}
</script>

<style scoped>
.BotaoSubmit{
    font-size: 1.7em;
    border-radius: 10px;
    border: 0;
}
.roxo{
    background-color: #483698;
}
.amarelo{
    background-color: #FBDE40;
    color: black
}
.branco{
    background-color: #F9F9F9;
    color:#483698
}
.alerta{
    background-color: #FBDE40;
}

</style>
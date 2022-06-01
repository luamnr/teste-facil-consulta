<template>

<div>

    <!-- <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="warning"
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...
    </b-alert> -->
    <b-button @click="mudarRota(local)" :class="colorClass">
        {{ textoBotao }}
    </b-button>

</div>

</template>

<script>

import { getSubmitLocker, lockSubmitlocker, validadorPagUm, validadorPagDois } from '../utils'
// import store from "../store"

export default {
    name: "BotaoSubmit",

    data(){
        return { 
            
        }
    },
 
    props:[
        "local",
        "textoBotao",
        "cor"
    ],

    methods:{
        mudarRota(local){

            console.log("if0")
            if (getSubmitLocker()){
                return
            }

            console.log("if1")
            if (this.$router.currentRoute.path == "/"){
                if (!validadorPagUm()){
                    return
                }
            }

            console.log("if2")
            if (this.$router.currentRoute.path == "/pagina2"){
                if (!validadorPagDois()){
                    return
                }
            }

            this.$router.push(local)
            lockSubmitlocker()
        },


    },

    computed:{
        colorClass(){
            console.log(this.cor)
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

</style>
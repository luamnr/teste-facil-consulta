<template>

<div>
    <b-button @click="mudarRota(local)" class="form-control BotaoSubmit">
        PROXIMO
    </b-button>

</div>

</template>

<script>

import { getSubmitLocker, lockSubmitlocker } from '../utils'

export default {
    name: "BotaoSubmit",
 
    props:[
        "local",

        // implementar ele ficar no modo cadastro??
        "ficaramarelo??"
    ],

    methods:{
        mudarRota(local){

            if (getSubmitLocker()){
                return
            }

            this.$router.push(local)
            lockSubmitlocker()

            

        }
    }
}
</script>

<style scoped>
.BotaoSubmit{
    background-color: #483698;
    font-size: 1.7em;
    border-radius: 10px;
    border: 0;
}
/* .BotaoSubmit a{
    color: white;
    text-decoration: none;
} */
</style>
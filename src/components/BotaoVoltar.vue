<template>

<div>
    <a class="conteudo botaoVoltar" @click="$router.push(rota)" href=""> &#60;</a>
</div>

</template>

<script>


export default {
    name: "BotaoVoltar",

    props:[
        "rota"
    ]
  
}
</script>

<style>
.botaoVoltar{
    margin-left: -70%;
    margin-bottom: -2%;
    font-size: 2em;
    text-decoration: none;
    padding-top: 1%;
    display: flex;
    justify-content: center;
}

</style>
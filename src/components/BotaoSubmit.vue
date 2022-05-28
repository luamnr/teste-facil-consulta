<template>

    <b-button type="submit" class="form-control BotaoSubmit">
        <router-link class="anchor" :to="local">PROXIMO</router-link>
    </b-button>

</template>

<script>
export default {
    name: "BotaoSubmit",
    props:[
        "local",
    ]
}
</script>

<style scoped>
    .BotaoSubmit{
    background-color: #483698;
    font-size: 1.7em;
    border-radius: 10px;
    border: 0;
    }
    .BotaoSubmit a{
        color: white;
        text-decoration: none;
    }
</style>
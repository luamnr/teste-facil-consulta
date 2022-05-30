<template>
    <b-progress :value="value" :max="max" height="2rem" >
        <b-progress-bar :value="value">
        </b-progress-bar>
    </b-progress>
</template>

<script>
export default {
    name: "BarraDeProgresso",
    data(){
        return{
            max: 2,
        }
    },
    props:[
        "value"
    ]
}
</script>

<style scoped>
.progress-bar{
    background-color: #483698 ;
}
</style>
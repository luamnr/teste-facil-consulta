<template>

<div>
    <b-card
        class="card"
        style="max-width: 20rem;"
    >
        <template #header>
        <h4 style="padding:3%;" class="mb-0">{{nome}}</h4>
        </template>

        <b-card-title>{{getItemById(especialidade, "especialidades")}}</b-card-title>

        <b-list-group flush>
        <b-list-group-item>{{cpf}}</b-list-group-item>
        <b-list-group-item>{{getItemById(cidade, "cidades")}}</b-list-group-item>
        </b-list-group>

    </b-card>
        <br>
</div>
</template>

<script>

import {getItemById} from "../utils";

export default {
    nome: "MedicoCard",
    props:[
        "nome",
        "cpf",
        "especialidade",
        "cidade"
    ],
    methods:{
        getItemById: getItemById
    }
}
</script>

<style>
.card{
    border: 1px black solid;
    
}

</style>
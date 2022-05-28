<template>


    <div class="containerForms" >
        <b-form class="areaForm">
            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <InputNome/>
                </b-col>
            </b-row>
            <b-row class="rowForm">
                <b-col cols="8" sm="8" md="9" lg="8">
                    <InputCPF/>
                </b-col>
            </b-row>
            <b-row class="rowForm">
                <b-col cols="8" sm="8" md="9" lg="8" >
                    <InputTelefone/>
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="5" sm="5" md="6" lg="6" >
                    <InputEstado/>
                </b-col>
                <b-col cols="5" sm="5" md="6" lg="6">
                    <InputCidade/>
                </b-col>
            </b-row>
            <br>
            <b-row lass="rowForm" align-h="around">
                <b-col cols="6">
                    <b-progress height="2rem" max="2" >
                        <b-progress-bar value="2">
                        </b-progress-bar>
                    </b-progress>
                </b-col>
                <b-col cols="6">
                    1 de 2
                </b-col>
            </b-row>
            <br>
            <b-row class="rowForm" align-self="center">
                <b-col cols="11">
                    <BotaoSubmit local="/pagina2"/>
                </b-col>
            </b-row>


       </b-form>
        
    </div>
</template>

<script>

import InputNome from "./InputNome"
import InputCPF from "./InputCPF"
import InputTelefone from "./InputTelefone"
import BotaoSubmit from "./BotaoSubmit"
import InputEstado from "./InputEstado"
import InputCidade from "./InputCidade"

export default {
    name: "FormulariosPaginaUm",

    components:{
        InputNome,
        InputCPF,
        InputTelefone,
        BotaoSubmit,
        InputEstado,
        InputCidade
    }
}
</script>

<style>

</style>
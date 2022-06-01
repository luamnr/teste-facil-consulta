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
                    <BarraDeProgresso value="1"/>
                </b-col>
                <b-col cols="6">
                    1 de 2
                </b-col>
            </b-row>
            <br>
            <b-row class="rowForm" align-self="center">
                <b-col cols="11">
                    <BotaoSubmit textoBotao="PROXIMO" cor="roxo" :local="{path : 'pagina2'}"/>
                </b-col>
            </b-row>


       </b-form>
        
    </div>
</template>

<script>

import InputNome from "../components/InputNome";
import InputCPF from "../components/InputCPF";
import InputTelefone from "../components/InputTelefone";
import BotaoSubmit from "../components/BotaoSubmit";
import InputEstado from "../components/InputEstado";
import InputCidade from "../components/InputCidade";
import BarraDeProgresso from "../components/BarraDeProgresso";

export default {
    name: "FormulariosPaginaUm",

    components:{
        InputNome,
        InputCPF,
        InputTelefone,
        BotaoSubmit,
        InputEstado,
        InputCidade,
        BarraDeProgresso
    }
}
</script>

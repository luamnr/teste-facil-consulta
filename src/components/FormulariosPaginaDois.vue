<template>


    <div class="containerForms" >
        <b-form class="areaForm">
            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <InputEspecialidade/>
                </b-col>
            </b-row>
            <b-row class="rowForm">
                <b-col cols="8" sm="8" md="9" lg="8">
                    <InputValor/>
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="5" sm="5" md="6" lg="6" >
                    <InputFormaPagamento/>
                </b-col>

            </b-row>
            <br>
            <b-row lass="rowForm" align-h="around">
                <b-col cols="6">
                    <BarraDeProgresso value="2"/>
                </b-col>
                <b-col cols="6">
                    2 de 2
                </b-col>
            </b-row>
            <br>
            <b-row class="rowForm" align-self="center">
                <b-col cols="11">
                    <BotaoSubmit textoBotao="PROXIMO" cor="roxo" :local="{path: 'pagina3'}"/>
                </b-col>
            </b-row>


       </b-form>
        
    </div>
</template>

<script>

import BotaoSubmit from "./BotaoSubmit"
import InputFormaPagamento from "./InputFormaPagamento"
import BarraDeProgresso from "./BarraDeProgresso"
import InputValor from "./InputValor"
import InputEspecialidade from "./InputEspecialidade"

export default {
    name: "FormulariosPaginaDois",

    components:{
        BotaoSubmit,
        InputFormaPagamento,
        BarraDeProgresso,
        InputValor,
        InputEspecialidade,
    }
}
</script>

<style>

</style>
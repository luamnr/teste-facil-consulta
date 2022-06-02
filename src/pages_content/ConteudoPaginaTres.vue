<template>


    <div class="containerForms" >
        <b-form class="areaForm">

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Nome completo</strong><br>
                    {{ getStore().nome }}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>CPF</strong><br>
                    {{ getStore().cpf }}
                </b-col>
            </b-row>


            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>número de celular ou telefone</strong><br>
                    {{ getStore().telefone }}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Estado/Cidade</strong><br>
                    {{ getItemById(getStore().estado, "estados") }} - {{getItemById(getStore().cidade, "cidades")}}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Especialidade principal</strong><br>
                    {{getItemById(getStore().especialidade, "especialidades")}} 
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Preço da consulta</strong><br>
                    {{ getStore().preco }}
                </b-col>
            </b-row>

            <b-row class="rowForm">
                <b-col cols="10" sm="10" md="12" lg="12">
                    <strong>Formas de pagamento da consulta</strong><br>
                    
                    <li v-for='item in getItemsById(getStore().pagamento, "pagamentos")' :key="item">
                    {{ item }}
                        <ul v-if="item == 'Cartão de crédito'">
                            <br>
                        <li v-for='itemParc in getItemsById(getStore().parcelamento, "parcelamentos")' :key="itemParc">
                        {{ itemParc }}
                        </li>
                        </ul>
                    </li>
                </b-col>
            </b-row>


            <b-row class="rowForm" align-self="center">

                <b-col cols="11">
                    <BotaoSubmit textoBotao="CADASTRAR PROFISSIONAL" cor="amarelo" :cadastrar="true" :local="{path: '/pagina4'}"/>
                    <BotaoSubmit style="padding-top:2%;" textoBotao="Editar cadastro" cor="branco" :local="{path: '/'}"/>
                </b-col>

            </b-row>


       </b-form>
        
    </div>
</template>

<script>

import BotaoSubmit from "../components/BotaoSubmit";
import store from "../store";
import { getItemById} from "../utils";
/* eslint-disable */
export default {
    name: "ConteudoPaginaTres",

    methods:{
        getStore(){
            return store.state;
        },

        getItemById: getItemById,

        getItemsById(id, campo){
            let temp = [];
            id.forEach(idElement => {
                store.state[campo].forEach(element => {
                    if (element.value == idElement){
                        temp.push(element.text);
                    }
                });
            });

            return temp;
        },
    },

    components:{
        BotaoSubmit,
    },

}
</script>

<style>

</style>
<template>
    <b-form-group label="Parcelamento em">
      <b-form-checkbox-group
        v-model="selecionadoParcelamento"
        :options="opcoesParcelamento"
        plain
        stacked
        class=""
      >

      </b-form-checkbox-group>
        <div class="erro" v-if="!$v.selecionadoParcelamento.required && $v.$dirty">Campo obrigatório!</div>
    </b-form-group>
</template>

<script>

import { required } from "vuelidate/lib/validators"
import store from "../store"
import { submitLockControl, releaseSubmitLocker } from "../utils"

export default {
    name: "InputOpcoesParcelamento",

    data(){

        return {
            selecionadoParcelamento: [],
            opcoesParcelamento: [
                {"text": "2x, sem juros", value: "1"},
                {"text": "3x, sem juros", value: "2"},
                {"text": "4x, sem juros", value: "3"},
                  
            ],
        }
    },
    
    mounted(){
        if (store.state.parcelamento){
            this.selecionadoParcelamento = store.state.parcelamento
        }

        if (store.state.parcelamentos && store.state.parcelamentos.length == 0){
            store.state.parcelamentos = this.opcoesParcelamento
        }
    
    },

    beforeDestroy(){
        if (!store.state.parcelamento.includes("3")){
            releaseSubmitLocker()
            store.state.parcelamento = []
        }
        
    },

    computed:{

        invalido () {
            if (this.$v.$dirty && this.$v.$invalid) {
                return 'erro';
            }
            return '';
        }
    },

    watch:{
        selecionadoParcelamento(novaForma){
            this.$v.$touch()
            store.state.parcelamento = novaForma
            submitLockControl(this.$v.$invalid)
        }
    },

    validations:{
        selecionadoParcelamento:{
            required,

        }
    }
}
</script>

<style>
    .opcaoParcelamento{
        background-color: red;
        padding: 1%;
        border: black 1px solid;
    }
</style>
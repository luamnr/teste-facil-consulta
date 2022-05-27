<template>

    <InputBase label="Estado*" >
        <b-form-select v-model="estadoSelecionado" 
        :options="estados"
        class="form-control"
        required
        >
            <template #first>
                <b-form-select-option value="" disabled>Selecione</b-form-select-option>
            </template>
        </b-form-select>
    </InputBase>

</template>

<script>

import InputBase from "./InputBase.vue"
import api from "../services/Api"


export default {
    name: "InputEstado",

    data(){
        return{
            estadoSelecionado: "",
            estados: []
        }
    },

    async created(){

        if (localStorage.estado){
            this.estadoSelecionado = localStorage.estado
        }

        const response = await api.get("/estados")
        response.data.forEach(element => {
            this.estados.push({value: element.id,
                               text: element.nome})
        });

    },

    components:{
        InputBase
    },

    watch:{
        estadoSelecionado(novoEstado){
            localStorage.estado = novoEstado
            this.$root.$emit("reloadCidades")
        }
    }
}
</script>

<style scoped>
</style>
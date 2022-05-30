<template>

    <InputBase label="Especialidade Principal*" >
        <b-form-select v-model="especialidadeSelecionado" 
        :options="especialidades"
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
import api from "../api"


export default {
    name: "InputEspecialidade",

    data(){
        return{
            especialidadeSelecionado: "",
            especialidades: []
        }
    },

    async created(){


        const response = await api.get("/especialidades")
        response.data.forEach(element => {
            this.especialidades.push({value: element.id,
                               text: element.nome})
        });

    },

    components:{
        InputBase
    },

}
</script>

<style scoped>
</style>
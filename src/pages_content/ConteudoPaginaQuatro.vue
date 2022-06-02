<template>

<div>


    <br>
    <b-row  class="containerForms" >


        <b-col cols="12" md="12" lg="6" v-for="medico in listaMedicos" :key="medico.id">
            <MedicoCard :nome="medico.nome" :cpf="medico.cpf" :cidade="medico.cidadeId" :especialidade="medico.especialidadeId"/>
        </b-col>

        
    </b-row>

    <b-row>
        <b-col cols="6">
            <b-button style="background-color: #483698" class="form-control" @click="anterior">Anteriores</b-button>

        </b-col>
        <b-col cols="6">
            <b-button style="background-color: #483698" class="form-control" @click="proximo">Proximos</b-button>

        </b-col>
    </b-row>
    <b-row>        
        <b-col style="padding-top:3%;" cols="12" >
            <b-button style="background-color: #FBDE40;color:black" class="form-control" @click="$router.push('/')">Cadastrar outro</b-button>
        </b-col>

    </b-row>

    <p style="font-size: 2em">
        {{numeroItens}}
    </p>

</div>
</template>

<script>

import store from "../store"
import MedicoCard from "../components/MedicoCard"

export default {
    name: "ConteudoPaginaQuatro",

    data(){
        return{
            medicos: store.state.todosMedicos,
            listaNum: 0,
        }
    },

    methods:{
        proximo(){
            this.listaNum += 4
        },
        anterior(){
            this.listaNum -= 4
        },
        reset(){
            this.listaNum = 0
        },
        last(){
            this.listaNum = this.lenArrayFunc() * 4
        },
        lenArrayFunc(){
            let lengthArr
            if (this.medicos.length % 4 == 0){
                lengthArr = Math.floor(this.medicos.length/4) -1
            }
            else{
                lengthArr = Math.floor(this.medicos.length/4)
            }
            return lengthArr
        }
    },

    computed:{

        numeroItens(){
            let lengthArr = this.lenArrayFunc()
            
            return `${this.listaNum/4 +(1) }/${lengthArr +(1)}`
        },

        listaMedicos(){
            if (this.listaNum > this.medicos.length -1 ){
                this.reset()
            }

            if (this.listaNum < 0){
                this.last()
            }
            return this.medicos.slice(this.listaNum, this.listaNum+4)
        }
    },


    components:{
        MedicoCard,
    }

}
</script>


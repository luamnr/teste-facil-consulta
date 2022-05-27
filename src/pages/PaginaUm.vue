<template>


  <div class="containerPrincipal" style="margin-top: 20px">
    <b-row>
      <h1>Sobre o profissional</h1>
      <h3>Dados do profissional</h3>
    </b-row>

    <b-row>

      <b-col class="colunaForm" cols="12" sm="12" md="6" xl="6">
        <ComponenteFormularios/>
      </b-col>

      <!-- <b-col classe="containerImagem" cols="12" sm="0" lg="6" class="d-none d-lg-none d-xl-block"> -->
                                                                                      <!-- d-none d-sm-none d-xl-block -->
      <b-col offset="1" cols="12" sm="0" md="5" xl="5" class="containerImagem d-none d-md-block">
        <img class="imagem" src="../assets/desktop-pagina-1.png" >
      </b-col>
    </b-row>

  </div>

</template>

<script>

// import api from "./services/api"
import ComponenteFormularios from "../components/ComponenteFormularios"

export default {
  name: 'PaginaUm',

  data(){
    return{
    }
  }, 
  components:{
    ComponenteFormularios,
  },
  methods:{
    
  },
  
}
</script>
// dentro do style colocar lang="scss"
<style lang="scss">

@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";




.containerPrincipal{
  border-radius: 30px;
  width: 80%;
  background-color: #fff;
  height: 70%;
  padding: 4% 4% 4% 8%;

}
// 1200px
@media only screen and (max-width: 767px){
  .containerPrincipal{
    width: 100% !important;
  }
}

img{
  float:right;
  position:relative;
    top: 50%;
  transform: translateY(-60%);
  
  /* padding-left: 10%; */
}
.containerImagem{
  // padding-left: 4% !important;
  vertical-align: middle;


}

@media only screen and (min-width: 600px) and (max-width: 1600px){
  .imagem{
    width: 114% !important;
    height: auto;
  }
}


</style>


// d-none d-md-block
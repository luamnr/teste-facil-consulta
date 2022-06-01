<template>
<div>
  <a @click="$router.push('/')" href=""> &#60;</a>

  <div class="conteudo">
    <CaixaPrincipal >
        <h1 slot="tituloDaCaixa">Sobre o atendimento</h1>
        <h3 slot="tituloDaCaixa">Detalhes do atendimento</h3>

      <FormulariosPaginaDois slot="formularios"/>
      
      <MolduraImagem slot="foto">
        <img class="imagem" src="../assets/desktop-pagina-2.png" >
      </MolduraImagem> 
    </CaixaPrincipal>
  </div>
</div>
</template>

<script>

import CaixaPrincipal from "../components/CaixaPrincipal"
import FormulariosPaginaDois from "../components/FormulariosPaginaDois"
import MolduraImagem from "../components/MolduraImagem"

export default {
  name: 'PaginaDois',

  data(){
    return{
      fromURL: ""
    }
  },

  components:{
    CaixaPrincipal,
    FormulariosPaginaDois,
    MolduraImagem
  },


}
</script>

<style >


</style>

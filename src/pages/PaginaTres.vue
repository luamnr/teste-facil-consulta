<template>
<div>
  <a  href=""> &#60;</a>

  <div class="conteudo">
    <CaixaPrincipal >
        <h1 slot="tituloDaCaixa">Revisão do cadastro</h1>

      <ConteudoPaginaTres slot="formularios"/>
      
      <MolduraImagem slot="foto">
        <img class="imagem" src="../assets/desktop-pagina-3.png" >
      </MolduraImagem> 
    </CaixaPrincipal>
  </div>
</div>
</template>

<script>

import CaixaPrincipal from "../components/CaixaPrincipal"
import ConteudoPaginaTres from "../components/ConteudoPaginaTres"
import MolduraImagem from "../components/MolduraImagem"

export default {
  name: 'PaginaTres',

  components:{
    CaixaPrincipal,
    ConteudoPaginaTres,
    MolduraImagem
  },


}
</script>

<style >


</style>

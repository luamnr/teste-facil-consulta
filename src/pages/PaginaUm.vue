<template>
<div>
<br>
  <div class="conteudo">
    <CaixaPrincipal >
        <h1 slot="tituloDaCaixa">Sobre o profissional</h1>
        <h3 slot="tituloDaCaixa">Dados do profissional</h3>

      <ConteudoPaginaUm slot="conteudo"/>
      
      <MolduraImagem slot="foto">
        <img class="imagem" src="../assets/desktop-pagina-1.png" >
      </MolduraImagem> 
    </CaixaPrincipal>
  </div>
</div>
</template>

<script>

import CaixaPrincipal from "../components/CaixaPrincipal"
import ConteudoPaginaUm from "../pages_content/ConteudoPaginaUm"
import MolduraImagem from "../components/MolduraImagem"

export default {
  name: 'PaginaUm',

  components:{
    CaixaPrincipal,
    ConteudoPaginaUm,
    MolduraImagem
  },


}
</script>

<style >


</style>

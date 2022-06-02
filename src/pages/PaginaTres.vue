<template>
<div>

  <BotaoVoltar rota="/pagina2" />

  <div class="conteudo">
    <CaixaPrincipal >
        <h1 slot="tituloDaCaixa">Revisão do cadastro</h1>

      <ConteudoPaginaTres slot="conteudo"/>
      
      <MolduraImagem slot="foto">
        <img class="imagem" src="../assets/desktop-pagina-3.png" >
      </MolduraImagem> 
    </CaixaPrincipal>
  </div>
</div>
</template>

<script>

import CaixaPrincipal from "../components/CaixaPrincipal";
import ConteudoPaginaTres from "../pages_content/ConteudoPaginaTres";
import MolduraImagem from "../components/MolduraImagem";
import BotaoVoltar from "../components/BotaoVoltar";

export default {
  name: 'PaginaTres',

  components:{
    CaixaPrincipal,
    ConteudoPaginaTres,
    MolduraImagem,
    BotaoVoltar
  },


}
</script>

<style >


</style>

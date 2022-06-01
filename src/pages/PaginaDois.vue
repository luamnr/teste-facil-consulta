<template>
<div>

  <BotaoVoltar rota="/"/>

  <div class="conteudo">
    <CaixaPrincipal >
        <h1 slot="tituloDaCaixa">Sobre o atendimento</h1>
        <h3 slot="tituloDaCaixa">Detalhes do atendimento</h3>

      <ConteudoPaginaDois slot="conteudo"/>
      
      <MolduraImagem slot="foto">
        <img class="imagem" src="../assets/desktop-pagina-2.png" >
      </MolduraImagem> 
    </CaixaPrincipal>
  </div>
</div>
</template>

<script>

import CaixaPrincipal from "../components/CaixaPrincipal"
import ConteudoPaginaDois from "../pages_content/ConteudoPaginaDois"
import MolduraImagem from "../components/MolduraImagem"
import BotaoVoltar from "../components/BotaoVoltar"

export default {
  name: 'PaginaDois',

  data(){
    return{
      fromURL: ""
    }
  },

  components:{
    CaixaPrincipal,
    ConteudoPaginaDois,
    MolduraImagem,
    BotaoVoltar
  },


}
</script>

<style >


</style>

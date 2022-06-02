<template>
<div>

  <div class="conteudo">
    <CaixaPrincipal >
        <h1 slot="tituloDaCaixa">Profissionais cadastrados</h1>

      <ConteudoPaginaQuatro slot="conteudo"/>
      
      <MolduraImagem slot="foto">
        <!-- foto 1 reutilizada -->
        <img class="imagem" src="../assets/desktop-pagina-1.png" >
      </MolduraImagem> 
    </CaixaPrincipal>
  </div>
</div>
</template>

<script>

import CaixaPrincipal from "../components/CaixaPrincipal";
import ConteudoPaginaQuatro from "../pages_content/ConteudoPaginaQuatro";
import MolduraImagem from "../components/MolduraImagem";

export default {
  name: 'PaginaQuatro',

  components:{
    CaixaPrincipal,
    ConteudoPaginaQuatro,
    MolduraImagem

  },


}
</script>

<style >


</style>

<template>
<div>
  <a @click="$router.go(-1)" > &#60;</a>

  <div class="conteudo">
    <CaixaPrincipal >
        <h1 slot="tituloDaCaixa">Sobre o profissional</h1>
        <h3 slot="tituloDaCaixa">Dados do profissional</h3>

      <FormulariosPaginaUm slot="formularios"/>
      
      <MolduraImagem slot="foto">
        <img class="imagem" src="../assets/desktop-pagina-1.png" >
      </MolduraImagem> 
    </CaixaPrincipal>
  </div>
</div>
</template>

<script>

import CaixaPrincipal from "../components/CaixaPrincipal"
import FormulariosPaginaUm from "../components/FormulariosPaginaUm"
import MolduraImagem from "../components/MolduraImagem"

export default {
  name: 'PaginaUm',

  components:{
    CaixaPrincipal,
    FormulariosPaginaUm,
    MolduraImagem
  },


}
</script>

<style >


</style>

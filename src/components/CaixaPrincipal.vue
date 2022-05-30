<template>
    <div class="containerPrincipal" style="margin-top: 20px">
    
        <b-row>
            <slot name="tituloDaCaixa"></slot>
        </b-row>

        <b-row>
            <b-col class="colunaForm" cols="12" sm="12" md="6" xl="6">
                <slot name="formularios"></slot>
            </b-col>

            <b-col offset="1" cols="12" sm="0" md="5" xl="5" class="d-none d-md-block">
                <slot name="foto"></slot>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "CaixaPrincipal"
}
</script>

<style > 
.containerPrincipal{
  border-radius: 30px;
  width: 80%;
  background-color: #fff;
  height: 100%;
  padding: 4% 4% 4% 8%;

}
/* 1200px */
@media only screen and (max-width: 767px){
  .containerPrincipal{
    width: 100%;
  }
}

/* Para os componentes unicos poderem compartilhar as classes */

.rowForm{
    padding: 2% 4% 2% 0;
}
.containerForms{
    align-items: left;
    align-content: left;
    padding-left: 0;
}


</style>
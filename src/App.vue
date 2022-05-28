<template>
  <div id="app">

      <router-view></router-view>
  
  </div>
</template>

<script>

export default ({
  name: "App",
  data() {
    return{
      paginaAnterior : null
    }
  },
  updated(){
    console.log("pagina anterior: "+this.paginaAnterior)
  },
  beforeRouteEnter(to, from, ){
    this.paginaAnterior = from
  }
})
</script>


<style>
#app{
  height: 100%;
  width: 100%;
  /* padding-top: 2%;
  display: flex;
  justify-content: center; */


}

</style>

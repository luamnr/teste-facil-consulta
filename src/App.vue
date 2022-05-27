<template>
  <div id="app">

      <a style="color:#483698;text-decoration: none; font-size: 2em" href="/"> &lt; </a>
      
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
    console.log(this.paginaAnterior)
  },
  beforeRouteEnter(to, from, ){
    this.paginaAnterior = from
  }
})
</script>


<style>
#app{
  padding-top: 2%;
  margin: auto;
  justify-content: center;
  display: flex;
  width: 100%;

}

</style>

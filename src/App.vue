<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

import store from "./store"

export default ({
  name: "App",
  data() {
    return{
      paginaAnterior : null,
    }
  },

  created(){
    if (localStorage.state){
      store.state = JSON.parse(localStorage.state)
    }
  },

  beforeUpdate(){
    localStorage.state = JSON.stringify(store.state)
    
  }
  
})
</script>


<style>
#app{
  height: 100%;
  width: 100%;
}

.max_size{
  width: 100%;
  height: 100%;
}
.conteudo{
  
  padding-top: 2%;
  display: flex;
  justify-content: center;

}

</style>

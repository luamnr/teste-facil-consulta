<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

import store from "./store"
import { getMedicos } from "./utils"

export default ({
  name: "App",
  data() {
    return{
      paginaAnterior : null,
    }
  },

  async created(){
    if (localStorage.state){
      store.state = JSON.parse(localStorage.state)
    }
    else{
      let medicos = await getMedicos()
      console.log(medicos)
      store.state.todosMedicos = medicos
    }
  },

  beforeUpdate(){
    localStorage.state = JSON.stringify(store.state)
    
  },
  
  
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

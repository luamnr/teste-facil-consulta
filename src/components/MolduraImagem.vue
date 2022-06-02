<template>
<span>
    <slot></slot>
</span>
</template>

<script>
export default {
    name:"MolduraImagem",
    props:[
        "src"
    ]

}
</script>

<style scoped>
.imagem{
  float:right;
  position:relative;
  top: 50%;
  transform: translateY(-60%);
}

@media only screen and (min-width: 600px) and (max-width: 1600px){
  .imagem{
    width: 114% !important;
    height: auto;
  }
}
</style>
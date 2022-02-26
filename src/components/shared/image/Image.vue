<template>
    <img class="img" :src="url" :alt="titulo">
</template>

<script>
export default {
    
    props: ['url', 'titulo']
}
</script>

<style scoped>
  .img {
    height: 12em;
    width: 100%;
    border-radius: 10px;
  }
</style>

<template>
  <div class="body">
    <div class="panel">
      <h2 class="panel-title">{{ title }}</h2>
        <slot class="panel-content">
        </slot>
    </div>
  </div>
</template>

<script>
  export default {
      props: ['title']
  }
</script>

<style>
  .panel {
    padding: 0 auto;
    border-radius: 12px;
    border: solid 2px gray;
    display: inline-block;
    margin: 5px;
    vertical-align: top;
    box-shadow: 5px 5px 10px;
    width: 300px;
  }

  .panel-title {
    text-align: center;
    border-radius: 10px;
    border: gray 3px solid;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
  }
</style>

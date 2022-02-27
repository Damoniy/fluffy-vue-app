<template>
  <div class="body">
    <meu-menu :routes='routes'/>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes'
import Menu from './components/shared/menu/Menu.vue'

export default {

  components: {
    'meu-menu': Menu
  },
  data() {
    return {
        routes,
      }
  }

}
</script>

<style scoped>
  .body {
    width: 96%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .page-enter, .page-leave-active {
    opacity: 0;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity 900ms;
  }
</style>

<template>
  <div class="body">
    <nav>
      <ul>
        
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
        </li>

      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

import { routes } from './routes'

export default {

  data() {
    return {
        routes
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
</style>

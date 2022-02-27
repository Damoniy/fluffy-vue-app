<template>
    <nav class="menu">
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    props: {
        routes: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

.menu {
  background: #4f6fa4;
  font-family: 'Roboto', sans-serif;
  height: 45px;
  padding-left: 18px;
  border-radius: 10px;
  margin: 0 auto;
  width: 60%;
}

.menu ul, .menu li {
  margin: 0 auto;
  padding: 0;
  list-style: none
}

.menu ul {
  width: 100%;
}

.menu li {
  float: left;
  display: inline;
  position: relative;
}

.menu a {
  display: block;
  line-height: 45px;
  padding: 0 14px;
  text-decoration: none;
  color: #FFFFFF;
  font-size: 16px;
}

.menu a.dropdown-arrow:after {
  content: "\25BE";
  margin-left: 5px;
}

.menu li a:hover {
  color: #0099CC;
  background: #F2F2F2;
}

.menu input {
  display: none;
  margin: 0;
  padding: 0;
  height: 45px;
  width: 100%;
  opacity: 0;
  cursor: pointer
}

.menu label {
  display: none;
  line-height: 45px;
  text-align: center;
  position: absolute;
  left: 35px
}
</style>

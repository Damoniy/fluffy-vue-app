<template>
  <div>
    <h1 class="title">{{ title }}</h1>

    <input type="search" class="search-box" @input="filter = $event.target.value" placeholder="Filtrar por nome">
    {{ filter }}
    <ul class="photo_list">
      <li class="list_item" v-for="foto in photosWithFilter" :key="foto.id">
        <panel :title="foto.titulo">
          <image-file :url="foto.url" :titulo="foto.titulo" />
          <btn type="button" label="Adicionar" btnStyle="default"></btn>
          <btn type="button" label="Editar" btnStyle="default"></btn>
          <btn type="button" label="Remover" :confirmation="true" btnStyle="remove" @buttonEvent="remove(foto)"></btn>
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Panel from '../shared/panel/Panel.vue';
  import Image from '../shared/image/Image.vue';
  import Button from '../shared/button/Button.vue'

  export default {
    components: {
      'panel': Panel,
      'image-file': Image,
      'btn' : Button

    },

    data() {
      return {
        title: 'Grayscale RPG',
        fotos: [],
        filter: ''
      }
    },

    computed: {
      photosWithFilter() {
        if(this.filter) {
          let exp = new RegExp(this.filter.trim(), 'i')
          return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {
          return this.fotos
        }
      }
    },

    methods: {
      remove(foto) {
        alert("A foto " + foto.titulo + " foi removida!");
      }
    },

    created() {
      this.$http.get('http://localhost:3000/v1/fotos')
      .then(response => response.json())
      .then(fotos => this.fotos = fotos, err => console.log(err))
    }
  }
</script>

<style scoped>
  .title {
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }

  .photo_list {
    list-style: none;
  }

  .photo_list .list_item {
    display: inline-block;
  }

  .search-box {
    display: block;
    width: 65%;
    margin: 0 auto;
  }
</style>

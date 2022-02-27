<template>
    <button :class="buttonStyle" :type="type" @click="onClickEvent"> {{label}} </button>
</template>

<script>

export default {

  props: ['type', 'label', 'confirmation', 'btnStyle'],

  methods: {
    onClickEvent() {
      if(this.confirmation) {
        if(confirm('Deseja remover a foto?')) {
          this.$emit('buttonEvent')
        }
        return;
      }
      this.$emit('buttonEvent')
    }
  },
  computed: {
    buttonStyle() {
      if(this.btnStyle == 'default' || !this.btnStyle) {
        return 'button-default'
      }
      if(this.btnStyle == 'remove') {
        return 'button-remove'
      }
    }
  }
}
</script>


<style scoped>
.button-default {
  border: none;
  border-radius: 3px;
  color: #FFFFFF;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 700;
  padding: 8px;
  background-color: #1E2226;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}

.button-default:hover {
  background: #53698f;
  border-radius: 2px;
  text-decoration: none;
}
.button-remove {
  border: none;
  border-radius: 3px;
  color: #FFFFFF;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 700;
  padding: 8px;
  background-color: #810e2d;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}

.button-remove:hover {
  background: #53698f;
  border-radius: 2px;
  text-decoration: none;
}
</style>

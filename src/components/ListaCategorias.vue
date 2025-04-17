<template>
  <h4>Categorias Ativas:</h4>
  <ul>
    <li v-for="cat in categorias" v-bind:for="cat">{{ cat }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ListaCategorias',
  props: {
    categorias: [],
  },
}
</script>

<style></style>

<template>
  <h3>{{ time.nome }}</h3>
  <ListaCategorias :categorias="time.categorias" />
  categorias: {{ time.categorias }}
</template>

<script>
import ListaCategorias from './ListaCategorias.vue'
export default {
  name: 'CardTime',
  components: ListaCategorias,
  props: {
    time: Object,
  },
  components: { ListaCategorias },
}
</script>

<style></style>

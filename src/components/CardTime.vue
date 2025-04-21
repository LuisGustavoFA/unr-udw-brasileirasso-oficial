<template>
  <h3>{{ time.nome }}</h3>
  <ListaCategorias :categorias="time.categorias" />
  <ListaJogadores :jogadores="jogadores" />
</template>

<script>
import ListaCategorias from './ListaCategorias.vue'
import ListaJogadores from './ListaJogadores.vue'

export default {
  name: 'CardTime',
  components: { ListaCategorias, ListaJogadores },
  props: {
    time: Object,
    jogadores: Array,
  },
}
</script>

<style></style>

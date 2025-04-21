<template>
  <h4>Jogadores:</h4>
  <ul>
    <li v-for="jogador in jogadores" v-bind:key="jogador.id">{{ jogador.nome }}</li>
  </ul>
</template>

<script>
export default {
  name: "ListaJogadores",
  props: {
    jogadores: Array,
  },
}
</script>

<style></style>

<template>
  <h1>Brasileirasso Oficial</h1>
  <CardTime v-for="time in times" v-bind:key="time.id" :time="time" :jogadores="time.jogadores" />
</template>

<script>
import services from '../services'
import CardTime from '../components/CardTime.vue'
export default {
  name: 'HomePage',
  components: { CardTime },
  data() {
    return {
      times: [],
    }
  },
  created() {
    services
      .getAllTimes()
      .then((dados) => {
        this.times = dados

        this.times.forEach((time) => {
          services
            .buscarJogadoresDeUmTime(time.id)
            .then((jogadores) => {
              time.jogadores = jogadores
            })
            .catch((erro) => {
              console.log(erro)
            })
        })
      })
      .catch((erro) => {
        console.log(erro)
      })
  },
}
</script>

<style></style>

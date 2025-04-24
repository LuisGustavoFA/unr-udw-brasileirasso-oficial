<template>
  <h1>Novo Time</h1>
  <FormTime @salvar="onSalvar()" />
</template>

<script>
import FormTime from '@/components/FormTime.vue'
import services from '@/services'
export default {
  name: 'CadastroTime',
  components: { FormTime },
  methods: {
    onSalvar(objEntrada) {
      services
        .saveTime(objEntrada)
        .then(() => {
          alert('deu certo')
          this.$router.push('/')
        })
        .catch((erro) => {
          alert('erro' + erro)
        })
    },
  },
}
</script>

<styles>

</styles>

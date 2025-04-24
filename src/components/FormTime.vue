<template>
  {{ nomeTMP }} <br />
  {{ categoriasTMP }} <br />
  Nome: <input id="nome" v-model="nomeTMP" /><br />
  Categorias:
  <br />
  <input
    type="checkbox"
    id="cat1"
    name="cat1"
    value="sub-20 Masc"
    @click="clickCategoria('cat1')"
  />
  <label for="cat1">Sub-20 Masculino</label>
  <br />
  <input type="checkbox" id="cat2" name="cat2" value="sub-20 Fem" @click="clickCategoria('cat2')" />
  <label for="cat2">Sub-20 Feminino</label>
  <br />
  <input
    type="checkbox"
    id="cat3"
    name="cat3"
    value="Profissional Masc"
    @click="clickCategoria('cat3')"
  />
  <label for="cat3">Profissional Masculino</label>
  <br />
  <input
    type="checkbox"
    id="cat4"
    name="cat4"
    value="Profissional Fem"
    @click="clickCategoria('cat4')"
  />
  <label for="cat4">Profissional Feminino</label>
  <br />
  <button>Cancelar</button>
  <button @click="clickSalvar()">Salvar</button>
</template>

<script>
export default {
  name: 'FormTime',
  data() {
    return {
      nomeTMP: '',
      categoriasTMP: [],
    }
  },
  methods: {
    clickCategoria(idCat) {
      let checkbox = document.getElementById(idCat)
      if (checkbox.checked) {
        this.categoriasTMP.push(checkbox.value)
      } else {
        this.categoriasTMP.splice(this.categoriasTMP.indexOf(checkbox.value), 1)
      }
    },

    clickSalvar() {
      let obj = {
        nome: this.nomeTMP,
        categorias: this.categoriasTMP,
      }
      this.$emit('salvar', obj)
    },
  },
}
</script>

<style></style>

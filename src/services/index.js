import axios from 'axios'

const jarvis = axios.create({
  // baseURL: 'http://10.182.131.159:3000',
  baseURL: 'http://localhost:3001',
  // headers: { api_key: 'Homem_de_Ferro' },
  headers: { api_key: 'ironman' },
})

export default {
  getAllTimes() {
    return new Promise((resolve, reject) => {
      jarvis
        .get('/times')
        .then((response) => {
          resolve(response.data)
        })
        .catch((erro) => {
          console.log(erro.message)
          reject(erro.message)
        })
    })
  },

  buscarJogadoresDeUmTime(id) {
    return new Promise((resolve, reject) => {
      jarvis
        .get(`/times/${id}/jogadores`)
        .then((response) => {
          resolve(response.data)
        })
        .catch((erro) => {
          console.log(erro.message)
          reject(erro.message)
        })
    })
  },

  saveTime(time) {
    return new Promise((resolve, reject) => {
      jarvis
        .post('/times', time)
        .then((response) => {
          resolve(response.data)
        })
        .catch((erro) => {
          console.log(erro.message)
          reject(erro.message)
        })
    })
  },
}

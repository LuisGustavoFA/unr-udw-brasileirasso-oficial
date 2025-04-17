import axios from axios;

const jarvis = axios.create({
  baseURL: 'http://10.182.131.159:3000',
  headers: {'api_key': 'Homem_de_Ferro'}
});

export default {

}

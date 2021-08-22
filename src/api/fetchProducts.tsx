import axios from 'axios';

export const fetchProducts = async () =>
  await axios
    .get('https://fakestoreapi.com/products')
    .then(res => res.data)
    .catch(error => error)

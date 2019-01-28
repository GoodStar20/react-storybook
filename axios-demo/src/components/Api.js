import axios from 'axios';

// use the axios create method to define a default instance for base URL
export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
})
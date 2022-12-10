import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:5000'
  baseURL: 'http://172.18.0.2:5000'
});

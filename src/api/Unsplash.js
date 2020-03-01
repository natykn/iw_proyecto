import axios from 'axios';

export  default axios.create({
  baseURL: "",
  headers:{
    Authorization:
      'Client-ID '
  }
});

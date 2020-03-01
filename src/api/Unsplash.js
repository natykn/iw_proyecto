import axios from 'axios';

export  default axios.create({
  baseURL: "",
  headers:{
    Authorization:
      'Client-ID xxxxxxxxxxxxxx' //reeemplazar esta línea con la key proporcionada en el manual
  }
});

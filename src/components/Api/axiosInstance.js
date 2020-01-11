import axios from 'axios';

var port = 8083;
var axiosInstance = axios.create({
  baseURL: 'http://test.goadroit.com' ,
 
  
});

export default axiosInstance;
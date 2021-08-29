import axios, { AxiosRequestConfig } from "axios";

const ApiClient = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})

// first argument function is for the request, second is for the error if any
ApiClient.interceptors.request.use((config: AxiosRequestConfig)=>{
  console.log('passed-here')
  console.log('intercept-request', config);
  config.headers.authorization = 'Bearer token'
  return config
},(error)=>{
  // if caught error
  console.log(error)
})

ApiClient.interceptors.response.use((response)=>{
  
  // do anything with the response
  console.log('intercept-response', response)

  return response
}, (error)=>{
  console.log(error)
})


export default ApiClient


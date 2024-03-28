import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001'
})
apiCodeBurger.interceptors.request.use(async config => {
  const useData = await localStorage.getItem('codeburger:userData')
  const token = useData && JSON.parse(useData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})
export default apiCodeBurger

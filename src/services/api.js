import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://code-burger-node-production.up.railway.app/'
})
apiCodeBurger.interceptors.request.use(async config => {
  const useData = await localStorage.getItem('codeburger:userData')
  const token = useData && JSON.parse(useData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})
export default apiCodeBurger

import base from './base'
import axios from 'axios'
const api = {
    totalInfo() {
        return axios.get(base.totalInfo)
    },
    orderInfo() {
        return axios.get(base.orderInfo)
    },
    format(){
        return axios.get(base.format)
    }
}
export default api
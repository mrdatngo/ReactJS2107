import axios from "axios"
import { getToken } from "../helpers/storage"

export const setAxiosToken = () => {
    let token = getToken()
    axios.defaults.headers.common.authorization = `Bearer ${token}`
}
setAxiosToken()

let base_api = "https://admin-api-json-server.herokuapp.com"

function login(data) {
    return axios.post(`${base_api}/auth/login`, data).then(res => {
        return res.data
    })
}

function fetchStudents(data) {
    return axios.get(`${base_api}/students?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

export { login, fetchStudents }
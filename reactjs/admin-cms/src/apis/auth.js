import axios from "axios"

let base_api = "http://localhost:3001"

function login(data) {
    return axios.post(`${base_api}/auth/login`, data).then(res => {
        return res.data
    })
}

export { login }
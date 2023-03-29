import Vue from "vue";
import axios from "axios";

export default function() {
    const $axios = axios.create({
        baseURL: 'http://localhost:8090',
        withCredentials: true
    })

    Vue.prototype.$axios = $axios
    $axios.interceptors.response.use(({ data }) => {
        return data
    }, error => {
        if (error.response.status === 401) {
            localStorage.removeItem('isAuthenticated')
            location.reload()
        }

        if (error.response.status === 409) return error.response.status

        return error
    })
}


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
        return error
    })
}

// const ax = axios.create({
//     baseURL: 'http://localhost:8090',
//     withCredentials: true
// });
//
// export default ax;


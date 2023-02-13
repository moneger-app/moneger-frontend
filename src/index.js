import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import router from './router'
import store from './store'
import createAxios from './plugins/axios'

createAxios()


// import axios from "axios";
//
// const $axios = axios.create({
//     baseURL: 'http://localhost:8090',
//     withCredentials: true
// })
//
// Vue.prototype.$axios = $axios
// $axios.interceptors.response.use(function (response) {
//     return response
// }, function (error) {
//     console.log(error)
//     if (error.response.status === 401) {
//         localStorage.removeItem('isAuthenticated')
//         location.reload()
//
//     }
//     // Do something with response error
//     return error
// });



new Vue({
    vuetify,
    router,
    store,
    components: { App },
    template: '<app/>',
}).$mount('#app')
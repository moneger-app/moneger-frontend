import Vue from 'vue';
import App from "./App.vue";
import vuetify from "./plugins/vuetify.js"
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8090';
axios.defaults.withCredentials = true


Vue.prototype.$axios = axios

new Vue({
    vuetify,
    router,
    store,
    components: { App },
    template: '<app/>',
}).$mount('#app')
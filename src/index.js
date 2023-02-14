import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import router from './router'
import store from './store'
import createAxios from './plugins/axios'

createAxios()

new Vue({
    vuetify,
    router,
    store,
    components: { App },
    template: '<app/>',
}).$mount('#app')
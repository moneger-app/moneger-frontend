import Vue from "vue";
import Vuex from "vuex";
import createAxios from './../plugins/axios'
import user from "./modules/user";
import accounts from "./modules/accounts";

createAxios()

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: user(Vue.prototype.$axios),
        accounts: accounts(Vue.prototype.$axios),
    },
})
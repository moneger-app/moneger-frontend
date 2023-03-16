import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Main from "../components/Main.vue";
import Accounts from "../components/Accounts.vue";

Vue.use(VueRouter)

export default new VueRouter ({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Main',
            path: '/main',
            component: Main
        },
        {
            name: 'Accounts',
            path: '/accounts',
            component: Accounts
        },
    ]
})


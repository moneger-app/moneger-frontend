<template>
    <v-app>
        <div class="fill-height">
            <div class="header">
                <div class="d-flex justify-space-between mb-4">
                    <span>moneger</span>
                    <v-btn
                        @click="toggleDarkTheme"
                        icon
                    >
                        <v-icon>{{ $vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
                    </v-btn>
                </div>
                <div class="line"/>
            </div>
            <div class="d-flex fill-height">
                <div class="router-view-container">
                    <router-view/>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
import Login from "./components/Login.vue";

export default {
    name: 'App',
    components: {
        Login,
    },
    data() {
        return {}
    },
    mounted() {
        this.getThemeFromStorage()
        // google authentication
        window.googleSignIn = this.googleSignIn
    },
    methods: {
        getThemeFromStorage() {
            this.$vuetify.theme.dark = localStorage.hasOwnProperty('darkTheme') ? +localStorage.getItem('darkTheme') : false
        },
        toggleDarkTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            localStorage.setItem('darkTheme', this.$vuetify.theme.dark ? '1' : '0')
        },
        googleSignIn(cred) {
            this.$axios.post('/google/auth', { token: cred.credential })
        }
    },
}
</script>

<style>
.header {
    width: 100%;
    position: absolute;
    padding: 20px;
    font-family: "Yu Gothic UI Semibold";
    font-size: 1.5rem;
}

.line {
    width: 100%;
    border-top: 1px solid #616161;
}

.router-view-container {
    margin: auto auto;
    width: 80%;
}
</style>
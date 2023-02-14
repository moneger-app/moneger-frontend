<template>
    <v-app>
        <div class="fill-height">
            <div class="header">
                <div class="d-flex justify-space-between mb-4">
                    <div class="d-flex">
                        <v-btn
                            v-if="isAuth"
                            class="mt-1"
                            icon
                            @click="$refs.navigationDrawer.openMenu()"
                        >
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                        <span>moneger</span>
                    </div>
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

            <navigation-drawer
                v-if="isAuth"
                ref="navigationDrawer"
                :credentials="credentials"
            />

        </div>
    </v-app>
</template>

<script>
import Login from "./components/Login.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default {
    name: 'App',
    components: {
        NavigationDrawer,
        Login,
    },
    data() {
        return {
            isAuth: false,
            credentials: {},
        }
    },
    async mounted() {
        this.getThemeFromStorage()
        this.verifyAuthentication()

        if (this.isAuth) {
            this.credentials = await this.$axios.get('/profile')
        }

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
        async googleSignIn(cred) {
            await this.$axios.post('/google/auth', { token: cred.credential })
                .then(() => {
                    this.isAuth = true
                    localStorage.setItem('isAuthenticated', '1')
                    this.$router.back()
                })
                .catch((err) => {
                    console.log(err)
                })

            this.credentials = await this.$axios.get('/profile')
        },
        verifyAuthentication() {
            this.isAuth = localStorage.getItem('isAuthenticated')
            if (!this.isAuth) {
                if (this.$route.path.includes('login')) return
                this.$router.push('/login')
            }
        },
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
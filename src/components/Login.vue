<template>
    <div class="wrap text-center">
        <h2>Добрый день</h2>
        <p>Просьба авторизоваться через Ваш Google-аккаунт</p>
        <div class="google-auth-button mx-auto overflow-hidden">
            <div
                id="g_id_onload"
                data-client_id="946108256311-vruaonqmq8pb44amtrk99cvcj3e27ir5.apps.googleusercontent.com"
                data-callback="googleSignIn"
                data-auto_prompt="false"
            >
            </div>
            <div
                class="g_id_signin"
                data-type="standard"
                :data-theme="$vuetify.theme.dark ? 'filled_black' : 'outline'"
                data-text="continue_with"
                data-width=250
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    mounted() {
        this.verifyAuthentication()
    },
    methods: {
        verifyAuthentication() {
            if (localStorage.getItem('isAuthenticated')) {
                this.$router.replace('/main')
            }
        },
    }
}
</script>

<style scoped>
@media screen and (min-width: 400px) {
    .wrap {
        font-size: 2rem;
    }
}
.wrap {
    margin: 0 auto;
}
.google-auth-button {
    max-width: 250px;
}
</style>
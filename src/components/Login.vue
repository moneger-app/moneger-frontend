<template>
    <div class="wrap text-center">
        <h2>Добрый день</h2>
        <p>Просьба авторизоваться через Ваш Google-аккаунт</p>
        <div class="google-auth-button mx-auto" style="max-width: 200px; overflow: hidden">
            <div
                id="g_id_onload"
                data-client_id="946108256311-vruaonqmq8pb44amtrk99cvcj3e27ir5.apps.googleusercontent.com"
                data-callback="googleSignIn"
                data-auto_prompt="false"
            >
            </div>
            <div class="g_id_signin" data-type="standard"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
        }
    },
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
.wrap {
    margin: 0 auto;
}
</style>
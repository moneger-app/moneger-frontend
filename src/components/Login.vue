<template>
    <div class="wrap">
        <h2>Добрый день</h2>
        <p>Просьба авторизоваться через Ваш Google-аккаунт</p>
        <div
            id="g_id_onload"
            data-client_id="946108256311-vruaonqmq8pb44amtrk99cvcj3e27ir5.apps.googleusercontent.com"
            data-callback="googleSignIn"
            data-auto_prompt="false"
        >
        </div>
        <div class="g_id_signin" data-type="standard"></div>
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
    },
    methods: {
    }
}
</script>

<style scoped>
.wrap {
    margin: 0 auto;
}
</style>
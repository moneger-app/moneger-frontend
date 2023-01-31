<template>
    <div>
        <h2>Добрый день</h2>
        <p>Просьба авторизоваться через Ваш Google-аккаунт</p>
        <v-btn>
            <v-icon>mdi-google</v-icon>
            <span class="mx-3 my-auto">Войти через Google</span>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            id: ''
        }
    },
    methods: {
        test() {
            this.$store.dispatch('fetchId', this.id)

            console.log(this.$store.getters.getId)
        }
    }
}
</script>

<style scoped>

</style>
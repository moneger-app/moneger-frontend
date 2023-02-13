<template>
    <div>
        <v-btn @click="getProfile">MainPage</v-btn>
        {{ accounts }}
    </div>
</template>

<script>
export default {
    name: "Main",
    data() {
        return {
            accounts: null
        }
    },
    async mounted() {
        this.accounts = await this.$axios.get('/account')
    },
    methods: {
        async getProfile() {
            console.log(await this.$axios.get('/profile'))
        }
    }
}
</script>

<style scoped>

</style>
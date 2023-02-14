<template>
    <div>
        <div
            v-if="!totalCount"
            class="d-flex flex-column text-center"
        >
            <span>У Вас отсутвуют счета</span>
            <v-btn>Создать</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main",
    data() {
        return {
            accounts: [],
            totalCount: 0,
        }
    },
    async mounted() {
        await this.getAccounts()
    },
    methods: {
        async getAccounts() {
            let data = await this.$axios.get('/account')
            console.log(data)

            this.accounts = data.accounts
            this.totalCount = data.totalCount
        },
    }
}
</script>

<style scoped>

</style>
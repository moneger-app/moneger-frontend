<template>
    <div>
        <div
            v-if="!totalCount"
            class="no-accounts d-flex flex-column text-center"
        >
            <div class="mb-3">У Вас отсутвуют счета</div>
            <v-btn
                class="mx-auto"
                @click="createAccount"
            >
                <v-icon>mdi-plus</v-icon>
                <span>Создать</span>
            </v-btn>
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

            this.accounts = data.accounts
            this.totalCount = data.totalCount
        },
    }
}
</script>

<style scoped>
.no-accounts {
    font-size: 1.5rem;
    font-weight: bolder;
}
</style>
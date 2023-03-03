<template>
    <div class="wrap">

        <div
            v-if="!totalCount"
            class="no-accounts"
        >
            <div class="mb-3">У Вас отсутвуют счета</div>
            <v-btn
                class="mx-auto"
                @click="$refs.accountDialog.openDialog()"
            >
                <v-icon>mdi-plus</v-icon>
                <span>Создать</span>
            </v-btn>
        </div>
        <div v-else class="d-flex flex-column align-center">
            <span class="mb-5">Общая сумма всех счетов</span>
            <span class="mb-5">{{ getTotalSum }}</span>
            <v-btn>
                <v-icon class="mr-2">mdi-cash-multiple</v-icon>
                <span>Добавить транзакцию</span>
            </v-btn>
        </div>

        <account-dialog
            ref="accountDialog"
            :isFirstAccount="!totalCount"
            @accountCreated="getAccounts"
        />

    </div>
</template>

<script>
import AccountDialog from "./AccountDialog.vue";

export default {
    name: "Main",
    components: { AccountDialog },
    data() {
        return {
            accounts: [],
            totalCount: 0,
        }
    },
    async mounted() {
        await this.getAccounts()
    },
    computed: {
        getTotalSum() {
            let totalSum = 0
            this.accounts.forEach(value => totalSum += value.balance)

            return this.accounts[0].currency + ' ' + String(totalSum)
        },
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
.wrap {
    font-size: 1.5rem;
    font-weight: bolder;
    text-align: center;
}
</style>
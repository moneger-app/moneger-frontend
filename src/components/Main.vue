<template>
    <div class="wrap">
        <div
            v-if="!accounts.length"
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
            v-if="!accounts.length"
            ref="accountDialog"
            :isFirstAccount="true"
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
        }
    },
    async mounted() {
    },
    computed: {
        getTotalSum() {
            let totalSum = 0
            this.accounts.forEach(value => {
                if (value.showInTotal) {
                    totalSum += value.balance
                }
            })

            return this.$store.getters.getUser.currency + ' ' + String(totalSum)
        },
        accounts() {
            return this.$store.getters.getAccounts || []
        },
    },
    methods: {

    },
}
</script>

<style scoped>
.wrap {
    font-size: 1.5rem;
    font-weight: bolder;
    text-align: center;
}
</style>
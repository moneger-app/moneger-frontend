<template>
    <v-dialog
        v-model="isOpen"
        persistent
    >
        <v-card class="pa-4">
            <div class="full-width d-flex justify-end">
                <v-icon @click="isOpen = false">mdi-close</v-icon>
            </div>
            <v-text-field
                ref="name"
                label="Наименование счёта"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                v-model="name"
                :rules="[value => !!value.length || 'Обязательное поле']"
            />
            <v-select
                v-if="isFirstAccount"
                ref="currency"
                label="Валюта"
                v-model="currency"
                :items="['KZT','USD']"
                :rules="[value => !!value.length || 'Обязательное поле']"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
            />
            <v-text-field
                ref="balance"
                label="Текущий баланс"
                v-model="balance"
                type="number"
                :rules="[value => !!value.length || 'Обязательное поле']"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
            />
            <v-checkbox
                label="Учитывать в общем балансе"
                v-model="showInTotal"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
            />

            <div class="d-flex justify-center justify-space-between">
                <v-btn @click="isOpen = false">Отмена</v-btn>
                <v-btn @click="createAccount">Создать</v-btn>
            </div>
        </v-card>

        <error-message
            ref="errorMessage"
            error-text="Счёт с таким именем уже существует"
        />
    </v-dialog>
</template>

<script>
import ErrorMessage from "./errorMessage.vue";

export default {
    name: "AccountDialog",
    components: {ErrorMessage},
    props: {
        isFirstAccount: false,
    },
    data() {
        return {
            isOpen: false,
            name: '',
            currency: '',
            balance: '',
            showInTotal: true,
            snackbarActive: false,
        }
    },
    computed: {

    },
    methods: {
        openDialog() {
            this.isOpen = true
        },
        async createAccount() {
            if (!this.name.length) {
                this.$refs.name.focus()
                return
            }
            if (this.isFirstAccount && !this.currency.length) {
                this.$refs.currency.focus()
                return
            }
            if (!this.balance.length) {
                this.$refs.balance.focus()
                return
            }

            let data = {
                name: this.name,
                balance: this.balance,
                showInTotal: this.showInTotal
            }

            await this.$axios.post('/account', data).then(async response => {
                if (response === 409) {
                    this.$refs.errorMessage.showMessage()
                    return
                }
                await this.$store.dispatch('fetchAccounts')

                if (this.isFirstAccount && this.currency !== 'USD') {
                    await this.$axios.put('/profile/options/currency', { currency: this.currency })
                }

                this.isOpen = false
            })
        },
    },
}
</script>

<style scoped>

</style>
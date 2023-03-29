<template>
    <div class="wrap">
        <div
            class="d-flex flex-column text-start"
            v-for="item in accounts"
            :key="item.id"
        >
            <v-text-field
                class="mb-0"
                v-model="item.adjustedName"
                label="Наименование счёта"
                :readonly="!item.isAdjusted"
                outlined
                hide-details
                :color="$vuetify.theme.dark ? 'white' : 'black'"
            >
                <template #append class="ya-tut">
                    <v-icon
                        v-if="!item.isAdjusted"
                        @click="item.isAdjusted = true"
                    >
                        mdi-pencil
                    </v-icon>
                    <div v-if="item.isAdjusted">
                        <v-icon @click="adjustName(item)">mdi-check</v-icon>
                        <v-icon @click="canselAdjust(item)">mdi-close</v-icon>
                    </div>
                </template>
                <template #append-outer>
                    <v-icon @click="deleteAccount(item.id)">mdi-delete</v-icon>
                </template>
            </v-text-field>
            <div class="pl-3">
                <span>{{ currency + ' ' + item.balance }}</span>
                <v-checkbox
                    class="mt-0"
                    @change="changeShowInTotal(item.showInTotal, item.id)"
                    :input-value="item.showInTotal"
                    :color="$vuetify.theme.dark ? 'white' : 'black'"
                    label="Отображать в общем счёте"
                />
            </div>
        </div>

        <v-btn @click="$refs.accountDialog.openDialog()" fab>
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <account-dialog ref="accountDialog"/>

        <error-message
            ref="errorMessage"
            error-text="Счёт с таким именем уже существует"
        />
    </div>
</template>

<script>
import AccountDialog from "./CreateAccountDialog.vue";
import ErrorMessage from "./errorMessage.vue";

export default {
    name: "Accounts",
    components: {ErrorMessage, AccountDialog},
    data() {
        return {
        }
    },
    mounted() {
    },
    watch: {
      accounts() {
          if (this.accounts.length === 0) this.$router.push('/main')
        }
    },
    computed: {
        accounts() {
            return this.$store.getters.getAccounts
        },
        currency() {
            return this.$store.getters.getUser?.currency || '---'
        },
    },
    methods: {
        async changeShowInTotal(showInTotal, id) {
            await this.$axios.put(`/account?id=${id}`, { showInTotal: !showInTotal })

            const accounts = this.accounts
            accounts.forEach(item => {
                if (item.id === id) {
                    item.showInTotal = !showInTotal
                }
            })
        },
        async adjustName(item) {
            item.isAdjusted = false

            const sameValues = item.name === item.adjustedName
            if (sameValues) return

            await this.$axios.put(`/account?id=${item.id}`, { name: item.adjustedName }).then(async response => {
                    if (response === 409) {
                        this.$refs.errorMessage.showMessage()
                        item.adjustedName = item.name
                        return
                    }

                    item.name = item.adjustedName
            })
        },
        canselAdjust(item) {
            item.isAdjusted = false
            item.adjustedName = item.name
        },
        async deleteAccount(currentId) {
            let accounts = this.accounts
            const id = accounts.findIndex(item => item.id === currentId)

            accounts.splice(id, 1)

            await this.$axios.delete(`/account?id=${currentId}`)

        }
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
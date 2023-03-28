<template>
    <div class="wrap">
        <div
            class="d-flex flex-column text-start"
            v-for="item in accounts"
            :key="item.id"
        >
            <span>{{ item.name }}</span>
            <span>{{ currency + ' ' + item.balance }}</span>
            <v-checkbox
                class="mt-0"
                @change="changeShowInTotal(item.showInTotal, item.id)"
                :input-value="item.showInTotal"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                label="Отображать в общем счёте"
            />
        </div>

        <v-btn @click="$refs.accountDialog.openDialog()" fab>
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <account-dialog ref="accountDialog"/>
    </div>
</template>

<script>
import AccountDialog from "./AccountDialog.vue";

export default {
    name: "Accounts",
    components: {AccountDialog},
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
            await this.$axios.put(`/account?id=${id}`, { showInTotal })

            let accounts = this.accounts
            accounts.forEach(item => {
                if (item.id === id) {
                    item.showInTotal = !showInTotal
                }
            })
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
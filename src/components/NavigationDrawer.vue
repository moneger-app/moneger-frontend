<template>
    <div v-if="credentials">
        <v-navigation-drawer
            class="pa-4"
            v-model="menuIsOpen"
            app
        >
            <div class="mb-2">
                <div class="d-flex justify-space-between mb-2">
                    <img alt="Картинка профиля" class="profile-img" :src="credentials.picture_link">
                    <v-icon @click="menuIsOpen = false">mdi-arrow-left</v-icon>
                </div>
                <div class="full-name">
                    <span>{{ credentials.first_name }}</span>
                    <span>{{ credentials.second_name }}</span>
                </div>
                <span>{{ credentials.email }}</span>
            </div>
            <v-divider/>
            <v-list class="pa-0">

                <v-list-item link  class="list-item" @click="goToMain()">
                    <v-list-item-icon class="item-icon">
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Главная</v-list-item-title>
                </v-list-item>

                <v-list-item link  class="list-item" @click="goToAccounts()">
                    <v-list-item-icon class="item-icon">
                        <v-icon>mdi-cash-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Мои счета</v-list-item-title>
                </v-list-item>

                <v-list-item link class="list-item" @click="$refs.logoutDialog.openDialog()">
                    <v-list-item-icon class="item-icon">
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Выйти из аккаунта</v-list-item-title>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <confirm-dialog
            ref="logoutDialog"
            @confirmed="logOut"
            title="Выход"
            description="Вы уверены, что хотите выйти?"
            yes-text-button="Да"
            no-text-button="Нет"
        />

        <error-message
            ref="errorMessage"
            error-text="У Вас отсутсвуют счета"
        />
    </div>
</template>

<script>
import ConfirmDialog from "./ConfirmDialog.vue";
import AccountDialog from "./AccountDialog.vue";
import ErrorMessage from "./errorMessage.vue";

export default {
    name: "NavigationDrawer",
    components: {ErrorMessage, AccountDialog, ConfirmDialog},
    data() {
        return {
            menuIsOpen: false,
        }
    },
    computed: {
        credentials() {
            return this.$store.getters.getUser
        },
    },
    methods: {
        openMenu() {
            this.menuIsOpen = true
        },
        async logOut() {
            await this.$axios.get('/logout')
            localStorage.removeItem('isAuthenticated')
            this.$router.push('/login')
            this.$router.go(0)
        },
        goToMain() {
            if (!this.$route.path.includes('main')) {
                this.$router.push('/main')
            }
        },
        goToAccounts() {
            const accountsLength = this.$store.getters.getAccounts.length

            if (!accountsLength) {
                this.$refs.errorMessage.showMessage()
                return
            }

            if (!this.$route.path.includes('accounts')) {
                this.$router.push('/accounts')
            }
        },
    }
}
</script>

<style scoped>
.full-name {
    font-size: 1.2rem;
    font-weight: bolder;
}
.profile-img {
    border-radius: 50%;
    width: 50px;
}
.list-item {
    padding: 0;
}
.item-icon {
    margin: 12px 4px 12px 0 !important;
}
</style>
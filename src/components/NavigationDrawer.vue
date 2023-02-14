<template>
    <div>
        <v-navigation-drawer
            class="pa-4"
            v-model="menuIsOpen"
            app
        >
            <div class="mb-2">
                <div class="d-flex justify-space-between mb-2">
                    <img class="profile-img" :src="credentials.picture_link">
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

                <v-list-item link  class="list-item" >
                    <v-list-item-icon class="item-icon">
                        <v-icon>mdi-cash-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Мои счета</v-list-item-title>
                </v-list-item>

                <v-list-item link class="list-item" @click="$refs.logOutDialog.openDialog()">
                    <v-list-item-icon class="item-icon">
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Выйти из аккаунта</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <confirm-dialog
            ref="logOutDialog"
            title="Выход"
            description="Вы уверены, что хотите выйти?"
            yes-text-button="Да"
            no-text-button="Нет"
        />
    </div>
</template>

<script>
import ConfirmDialog from "./ConfirmDialog.vue";

export default {
    name: "NavigationDrawer",
    components: {ConfirmDialog},
    props: {
        credentials: {},
    },
    data() {
        return {
            menuIsOpen: false,
        }
    },
    methods: {
        openMenu() {
            this.menuIsOpen = true
        }
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
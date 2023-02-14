<template>
    <v-dialog
        v-model="isOpen"
    >
        <v-card class="confirm-dialog">
            <span class="dialog-title">{{ title }}</span>
            <span class="text-center mb-4">{{ description }}</span>
            <div class="text-center mb-3">
                <v-btn class="mr-2" @click="$emit('confirmed')">{{ yesTextButton }}</v-btn>
                <v-btn @click="">{{ noTextButton }}</v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "ConfirmDialog",
    props: {
        title: '',
        description: '',
        yesTextButton: '',
        noTextButton: '',
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        openDialog() {
            this.isOpen = true
        }
    }
}
</script>

<style scoped>
.confirm-dialog {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.dialog-title {
    font-size: 1.25rem;
    font-weight: bolder;
    margin: 10px;
}
</style>
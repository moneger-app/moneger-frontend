<template>
    <v-snackbar
        v-model="snackbarActive"
        timeout="2000"
        color="error"
    >
        <span class="d-flex justify-center">{{ errorText }}</span>
    </v-snackbar>
</template>

<script>
export default {
    name: "errorMessage",
    props: {
        errorText: {
            type: String,
            default: 'Ошибка'
        }
    },
    data() {
        return {
            snackbarActive: false
        }
    },
    methods: {
        showMessage() {
            this.snackbarActive = true
        }
    }
}
</script>

<style scoped>

</style>
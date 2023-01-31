<template>
    <v-app>
        <div class="d-flex justify-center fill-height">
            <div class="d-flex align-center">
                <router-view/>
            </div>
        </div>
    </v-app>
</template>

<script>
import Login from "./components/Login.vue";
    export default {
        name: 'App',
        components: {
          Login,
        },
        data() {
            return {

            }
        },
    }
</script>

<style>

</style>
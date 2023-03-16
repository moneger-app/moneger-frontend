export default function ($axios) {
    return {
        state: {
            user: {},
        },
        mutations: {
            setUser(state, data) {
                state.user = data
            },
        },
        actions: {
            async fetchUser({ commit }) {
                const data = await $axios.get('/profile')
                commit('setUser', data)
            },
            async signIn({ commit }, data) {
                let isSuccessful = false
                await $axios.post('/google/auth', data)
                    .then(async() => {
                        localStorage.setItem('isAuthenticated', '1')
                        await this.dispatch('fetchUser')
                        isSuccessful = true
                    })
                    .catch((err) => {
                        console.log(err)
                    })

                return isSuccessful
            }
        },
        getters: {
            getUser: ({ user }) => user,
        },
    }
}
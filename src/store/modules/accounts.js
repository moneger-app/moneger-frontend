export default function ($axios) {
    return {
        state: {
            accounts: {},
        },
        mutations: {
            setAccounts(state, data) {
                state.user = data
            },
        },
        actions: {
            async fetchAccounts({ commit }) {
                let data = await $axios.get('/profile')
                commit('setUser', data)
            }
        },
        getters: {
            getAccounts: ({ user }) => user,
        },
    }
}
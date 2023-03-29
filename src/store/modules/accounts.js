export default function ($axios) {
    return {
        state: {
            accounts: [],
        },
        mutations: {
            setAccounts(state, data) {
                state.accounts = data
            },
        },
        actions: {
            async fetchAccounts({ commit }) {
                const data = await $axios.get('/account')
                let accounts = data.accounts
                accounts.forEach(item => {
                    item.showInTotal = item.show_in_total
                    delete item.show_in_total

                    item.isAdjusted = false
                    item.adjustedName = item.name
                })
                commit('setAccounts', data.accounts)
            }
        },
        getters: {
            getAccounts: ({ accounts }) => accounts,
        },
    }
}
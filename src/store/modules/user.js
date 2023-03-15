export default {
    state: {
        user: {},
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
    },
    actions: {
        fetchUser({ commit }, data) {
            commit('setUser', data)
        }
    },
    getters: {
        getUser: ({ user }) => user,
    },
}
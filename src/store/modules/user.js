export default {
    state: {
        id: 0,
        authorized: false,
    },
    mutations: {
        setId(state, id) {
            state.id = id
        },
        setAuthorized(state, value) {
            state.authorized = value
        }
    },
    actions: {
        fetchId({ commit }, id) {
            commit('setId', id)
            commit('setAuthorized', true)
        }
    },
    getters: {
        getId: ({ id }) => id,
        getAuthorized: ({ authorized }) => authorized,
    },
}
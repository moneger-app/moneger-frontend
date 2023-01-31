export default {
    state: {
        id: 0
    },
    mutations: {
        setId(state, id) {
            state.id = id
        },
    },
    actions: {
        fetchId({ commit }, id) {
            commit('setId', id)
        }
    },
    getters: {
        getId: (state) => state.id
    },
}
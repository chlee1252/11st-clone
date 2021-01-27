export default {
    namespaced: true,
    state: () => ({
        isShowLNB: false,
        isShowRNB: false,
    }),
    mutations: {
        // 데이터를 갱신해주는 범용화 된 함수
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key];
            });
        }
    },
    // Methods 역할
    actions: {
        onNav({ commit }, name) {
            commit('updateState', {
                [`isShow${name}`]: true,
            });
        },
        offNav({ commit }, name) {
            commit('updateState', {
                [`isShow${name}`]: false,
            });
        },
    }
}
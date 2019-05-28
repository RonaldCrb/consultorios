export const strict = false

export const state = () => ({
  fcmToken: null
})

export const mutations = {
  setFCMtoken(state, fcmToken) {
    state.fcmToken = fcmToken
  }
}

export const actions = {
  setFCMtoken({ commit }, fcmToken) {
    commit('setFCMtoken', fcmToken)
  }
}

const state = {
  dark: false
}

const getters = {
  getDarkTheme: state => state.dark
}

const mutations = {
  toggleDarkTheme(state) {
    state.dark = !state.dark
  }
}

export default {
  state,
  getters,
  mutations
}

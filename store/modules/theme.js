const state = {
  dark: false
}

const getters = {
  getDarkTheme: state => state.dark,
  getThemeName(state) {
    return state.dark ? "dark" : "light"
  }
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

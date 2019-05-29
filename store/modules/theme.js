const state = {
  dark: false,
  name: ""
}

const getters = {
  getDarkTheme: state => state.dark,
  getThemeName: state => state.name
}

const mutations = {
  toggleDarkTheme(state) {
    ;(state.dark = !state.dark),
      state.dark ? (state.name = "dark") : (state.name = "light")
  }
}

export default {
  state,
  getters,
  mutations
}

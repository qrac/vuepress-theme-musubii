import process from "process"

const state = {
  theme: "light"
}

const getters = {
  getTheme: state => state.theme
}

const mutations = {
  initTheme(state) {
    if (process.browser) {
      state.theme = localStorage.getItem("theme")
    }
  },
  toggleTheme(state) {
    state.theme === "light" ? (state.theme = "dark") : (state.theme = "light")
    if (process.browser) {
      localStorage.setItem("theme", state.theme)
    }
  }
}

export default {
  state,
  getters,
  mutations
}

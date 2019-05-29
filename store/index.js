import Vue from "vue"
import Vuex from "vuex"
import theme from "./modules/theme"
import process from "process"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const modules = {
  theme
}

function createPersistedStateWrapper(store) {
  if (process.browser && store) {
    createPersistedState({
      key: "vuepress-theme-musubii",
      paths: ["theme.dark", "theme.name"]
    })(store)
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  namespaced: true,
  modules,
  plugins: [createPersistedStateWrapper]
})

import Vue from "vue"
import Vuex from "vuex"

import theme from "./modules/theme"

import process from "process"
import createPersistedState from "vuex-persistedstate"

const modules = {
  theme
}

Vue.use(Vuex)

function createPersistedStateWrapper(store) {
  if (process.browser && store) {
    createPersistedState({
      key: "vuepress-theme-musubii",
      paths: ["theme.dark"]
    })(store)
  }
}

export default new Vuex.Store({
  modules,
  plugins: [createPersistedStateWrapper]
})

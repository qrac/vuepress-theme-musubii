import Vue from "vue"
import Vuex from "vuex"
import theme from "./modules/theme"

Vue.use(Vuex)

const modules = {
  theme
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  namespaced: true,
  modules
})

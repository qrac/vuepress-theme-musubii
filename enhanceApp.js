import Vuex from "vuex"
import store from "./store"

const watch = store.watch((state, getters) => {
  return state, getters
})

export default ({ Vue }) => {
  Vue.use(Vuex), Vue.mixin({ store: store }, { watch: watch })
}

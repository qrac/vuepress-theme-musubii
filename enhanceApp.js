import Vuex from "vuex"
import store from "./store/index"

export default ({ Vue }) => {
  Vue.use(Vuex), Vue.mixin({ store: store })
}

<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0
      },
      `depth-${depth}`
    ]"
  >
    <router-link
      v-if="item.path"
      class="sidebar-heading clickable"
      :class="{
        open,
        'active': isActive($route, item.path)
      }"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span class="arrow" v-if="collapsable" :class="open ? 'down' : 'right'"></span>
    </router-link>

    <p v-else class="sidebar-heading" :class="{ open }" @click="$emit('toggle')">
      <span>{{ item.title }}</span>
      <span class="arrow" v-if="collapsable" :class="open ? 'down' : 'right'"></span>
    </p>

    <SidebarLinks
      class="sidebar-group-items"
      :items="item.children"
      v-if="open || !collapsable"
      :sidebarDepth="item.sidebarDepth"
      :depth="depth + 1"
    />
  </section>
</template>

<script>
import { isActive } from "../util";

export default {
  name: "SidebarGroup",
  props: ["item", "open", "collapsable", "depth"],
  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks = require("./SidebarLinks.vue").default;
  },
  methods: { isActive }
};
</script>

<style lang="scss">
@import "@theme/styles/palette.scss";

.sidebar-heading {
  margin-bottom: $margin-size-xs;
  font-size: 115%;
  font-weight: 700;
}

.sidebar-group-items {
  margin-bottom: $margin-size-sm;
}
</style>

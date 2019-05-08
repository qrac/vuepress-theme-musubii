<template>
  <aside class="sidebar is-mobile-tablet-none">
    <slot name="top"/>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";

export default {
  name: "Sidebar",
  components: { SidebarLinks },
  props: ["items"]
};
</script>

<style lang="scss">
@import "@theme/styles/variables.scss";

.sidebar {
  width: 200px;
  padding: $padding-size-xl $padding-size-lg $padding-size-xxl 0;
}
</style>
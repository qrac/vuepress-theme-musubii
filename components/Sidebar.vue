<template>
  <aside class="sidebar is-mobile-tablet-none">
    <div class="sidebar-contents">
      <slot name="top"/>
      <SidebarLinks :depth="0" :items="items"/>
      <slot name="bottom"/>
    </div>
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
  flex: none;
  width: 214px;
}

.sidebar-contents {
  position: sticky;
  top: 0;
  padding: $padding-size-xl $padding-size-lg $padding-size-xxl 0;
}
</style>
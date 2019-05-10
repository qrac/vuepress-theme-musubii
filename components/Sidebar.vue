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
@import "@theme/styles/palette.scss";

.sidebar {
  flex: none;
  width: 214px;
  //border-right: 1px solid $convert-border;
}

.sidebar-contents {
  position: sticky;
  top: $header-height;
  max-height: calc(100vh - #{$header-height});
  padding: $padding-size-xl $padding-size-lg $padding-size-xxl 0;
  overflow: auto;
}
</style>
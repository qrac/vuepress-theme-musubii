<template>
  <aside class="menu">
    <SearchBox/>
    <NavLinks/>
    <slot name="top"/>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SearchBox from "@theme/components/SearchBox";
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "Menu",
  components: { SearchBox, SidebarLinks, NavLinks },
  props: ["items"]
};
</script>

<style lang="scss">
@import "@theme/styles/variables.scss";

:not(.menu-open) {
  > .menu {
    display: none;
  }
}

.menu {
  @include desktop {
    display: none;
  }
}
</style>
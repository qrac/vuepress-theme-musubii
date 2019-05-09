<template>
  <aside class="menu">
    <div class="box is-padding-top-md is-padding-right-sm is-padding-bottom-md is-padding-left">
      <SearchBox/>
    </div>
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
@import "@theme/styles/palette.scss";

:not(.menu-open) {
  > .menu {
    display: none;
    border-bottom: none;
  }
}

.menu {
  background-color: $convert-background;
  border-bottom: 1px solid $convert-border;
  > *:not(:last-child) {
    border-bottom: 1px solid $convert-border;
  }
  > .nav-links,
  > .sidebar-links {
    padding: $padding-size-md;
  }
  .nav-links {
    .nav-link,
    .repo-link {
      display: block;
      margin-bottom: $margin-size-xs;
      font-size: 115%;
      font-weight: 700;
    }
    .nav-link.router-link-active {
      color: $convert-primary-strong;
    }
  }
  @include desktop {
    display: none;
    border-bottom: none;
  }
}
</style>
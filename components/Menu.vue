<template>
  <aside class="menu">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="menu-contents" v-show="menuOpen">
        <div class="menu-header">
          <SearchBox/>
        </div>
        <div class="menu-links">
          <NavLinks/>
          <slot name="top"/>
          <SidebarLinks :depth="0" :items="items"/>
          <slot name="bottom"/>
        </div>
      </div>
    </transition>
  </aside>
</template>

<script>
import SearchBox from "@theme/components/SearchBox";
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "Menu",
  components: { SearchBox, SidebarLinks, NavLinks },
  props: ["menu-open", "items"],
  methods: {
    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function(el) {
      el.style.height = "0";
    }
  }
};
</script>

<style lang="scss">
@import "@temp/palette.scss";

.menu {
  position: fixed;
  top: $header-height;
  left: 0;
  width: 100%;
  max-height: calc(100vh - #{$header-height});
  background-color: $convert-background;
  z-index: 99;
}

.menu-contents {
  border-top: 1px solid $convert-border;
  border-bottom: 1px solid $convert-border;
  transition: height 0.2s ease-in-out;
  &.v-enter,
  &.v-enter-to,
  &.v-leave,
  &.v-leave-to {
    overflow: hidden;
  }
  > *:not(:last-child) {
    border-bottom: 1px solid $convert-border;
  }
}

.menu-header {
  display: flex;
  align-items: center;
  height: $menu-header-height;
  padding: 0 $padding-size-sm;
  > * {
    flex: none;
    width: 100%;
  }
}

.menu-links {
  max-height: calc(100vh - #{$header-height} - #{$menu-header-height});
  overflow-y: auto;
  > *:not(:last-child) {
    border-bottom: 1px solid $convert-border;
  }
  > *:last-child {
    @include safe-area-padding(bottom);
  }
  > .nav-links,
  > .sidebar-links {
    padding: $padding-size-md;
  }
  > .nav-links {
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
}
</style>
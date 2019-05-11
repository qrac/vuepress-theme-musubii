<template>
  <aside class="menu">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="menu-contents" v-show="open">
        <div class="box is-padding-top-md is-padding-right-sm is-padding-bottom-md is-padding-left">
          <SearchBox/>
        </div>
        <NavLinks/>
        <slot name="top"/>
        <SidebarLinks :depth="0" :items="items"/>
        <slot name="bottom"/>
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
  props: ["open", "items"],
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
@import "@theme/styles/palette.scss";

:not(.is-menu-open) {
  > .menu {
    //display: none;
    border-bottom: none;
  }
}

.menu {
  position: fixed;
  top: $header-height;
  left: 0;
  width: 100%;
  max-height: calc(100vh - #{$header-height});
  background-color: $convert-background;
  border-bottom: 1px solid $convert-border;
  overflow-y: auto;
  z-index: 99;
  @include desktop {
    display: none;
    border-bottom: none;
  }
}

.menu-contents {
  transition: height 0.2s ease-in-out;
  overflow: hidden;
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
}
</style>
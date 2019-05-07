<template>
  <header class="header">
    <div class="inner is-padding-right-sm is-padding-left-sm">
      <div class="box is-flex is-middle is-between">
        <router-link :to="$localePath" class="box">
          <img
            class="logo"
            v-if="$site.themeConfig.logo"
            :src="$withBase($site.themeConfig.logo)"
            :alt="$siteTitle"
          >
          <span
            ref="siteName"
            class="site-name"
            v-else-if="$siteTitle"
            :class="{ 'can-hide': $site.themeConfig.logo }"
          >{{ $siteTitle }}</span>
        </router-link>
        <div class="box is-flex is-middle">
          <SearchBox/>
          <NavLinks class="can-hide"/>
          <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from "@SearchBox";
import SidebarButton from "./SidebarButton.vue";
import NavLinks from "./NavLinks.vue";

export default {
  components: { SidebarButton, NavLinks, SearchBox },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="scss">
@import "@theme/styles/variables.scss";

.header {
  padding: 2em 0;
  background-color: $primary;
  > .inner {
    max-width: 100%;
    margin: 0 auto;
    @include fablet {
      width: $section-inner-width-fablet;
    }
    @include tablet {
      width: $section-inner-width-tablet;
    }
    @include desktop {
      width: $section-inner-width-desktop;
    }
    @include wide {
      width: $section-inner-width-wide;
    }
  }
}

.logo,
.logo[src$=".svg"] {
  width: 200px;
}
</style>
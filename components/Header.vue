<template>
  <header class="header">
    <div class="inner">
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
          <MenuButton @toggle-menu="$emit('toggle-menu')"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from "@SearchBox";
import MenuButton from "@theme/components/MenuButton.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  components: { MenuButton, NavLinks, SearchBox }
};
</script>

<style lang="scss">
@import "@theme/styles/variables.scss";

.header {
  padding: $padding-size-lg 0;
  background-color: $primary;
  > .inner {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 $padding-size-sm;
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
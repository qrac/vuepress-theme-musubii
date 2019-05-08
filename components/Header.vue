<template>
  <header class="header">
    <div class="inner">
      <div class="grid is-middle is-between is-gap-column-md">
        <div class="column">
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
        </div>
        <div class="column is-mobile-tablet-none">
          <NavLinks class="can-hide"/>
        </div>
        <div class="column is-mobile-0 is-mobile-tablet-none">
          <SearchBox class="is-ghost"/>
        </div>
        <div class="column">
          <div class="grid is-middle is-gap-column-xs">
            <div class="column">
              <DarkThemeButton/>
            </div>
            <div class="column is-desktop-none">
              <MenuButton @toggle-menu="$emit('toggle-menu')"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavLinks from "@theme/components/NavLinks.vue";
import SearchBox from "@theme/components/SearchBox";
import DarkThemeButton from "@theme/components/DarkThemeButton";
import MenuButton from "@theme/components/MenuButton.vue";

export default {
  components: { NavLinks, SearchBox, DarkThemeButton, MenuButton }
};
</script>

<style lang="scss">
@import "@theme/styles/variables.scss";

.header {
  padding: $padding-size-md 0;
  background-color: $primary;
  @include desktop {
    padding: $padding-size-xl 0;
  }
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
  .nav-links {
    display: flex;
    .item {
      padding: $padding-size-xs;
      color: $light;
      font-weight: 700;
      .icon {
        color: $light;
      }
    }
  }
}

.logo,
.logo[src$=".svg"] {
  max-width: 188px;
}
</style>
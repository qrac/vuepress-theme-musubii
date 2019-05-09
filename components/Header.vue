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
          <SearchBox/>
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
@import "@theme/styles/palette.scss";

.header {
  position: relative;
  padding: $padding-size-md 0;
  background-color: $convert-header-background-color;
  box-shadow: 0 1px 0 $convert-header-border-color;
  transition: $transition-change-theme;
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
  .logo,
  .logo[src$=".svg"] {
    max-width: 188px;
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
  .search-box {
    .icon.is-search {
      color: $light;
    }
    .input[type="search"] {
      background-color: transparent;
      border-color: $light;
      color: $light;
    }
  }
  .toggle-theme-button {
    .button.is-outline {
      background-color: transparent;
      border-color: $light;
      &:hover {
        background-color: transparent;
      }
      .icon {
        color: $light;
      }
    }
  }
}
</style>
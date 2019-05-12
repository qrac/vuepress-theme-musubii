<template>
  <header class="header">
    <div class="inner">
      <div class="grid is-middle is-between is-gap-column-md">
        <div class="column">
          <router-link :to="$localePath" class="site-titles">
            <img
              class="site-title-logo"
              v-if="$site.themeConfig.logo"
              :src="$withBase($site.themeConfig.logo)"
              :alt="$siteTitle"
            >
            <span ref="siteName" class="site-title-text">{{ $siteTitle }}</span>
          </router-link>
        </div>
        <div class="column is-mobile-0 is-mobile-tablet-none">
          <NavLinks/>
        </div>
        <div class="column is-mobile-tablet-none">
          <SearchBox/>
        </div>
        <div class="column">
          <div class="grid is-middle is-gap-column-xs">
            <div class="column is-hidden-use-css-variables-false">
              <DarkThemeButton/>
            </div>
            <div class="column is-desktop-none">
              <MenuButton @toggle-menu="$emit('toggle-menu')" :menu-open="menuOpen"/>
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
  components: { NavLinks, SearchBox, DarkThemeButton, MenuButton },
  props: ["menu-open"]
};
</script>

<style lang="scss">
@import "@temp/palette.scss";

.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: $header-height;
  background-color: $header-background-color;
  box-shadow: $header-box-shadow;
  z-index: 100;
  > .inner {
    flex: none;
    width: 100%;
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
  .search-box {
    .icon.is-search {
      color: $light;
    }
    .input[type="search"] {
      background-color: transparent;
      border-color: $light;
      color: $light;
      @include placeholder {
        color: $convert-text-light-4;
      }
    }
    .suggestions {
      width: 480px;
      &:before,
      &:after {
        left: auto;
        right: 10%;
      }
    }
  }
  .toggle-theme-button,
  .toggle-menu-button {
    .button.is-outline {
      background-color: transparent;
      border-color: $light;
      &:hover {
        background-color: transparent;
      }
      .icon {
        color: $light;
      }
      .icon.is-bars > .bar {
        background-color: $light;
      }
    }
  }
}

.site-titles {
  display: flex;
  align-items: center;
  > *:not(:first-child) {
    margin-left: $space-size-sm;
  }
}

.site-title-logo,
.site-title-logo[src$=".svg"] {
  flex: none;
  width: $site-title-logo-width;
}

.site-title-text {
  flex: none;
  color: $site-title-text-color;
  font-size: $site-title-text-font-size;
  font-weight: $site-title-text-font-weight;
  font-family: $site-title-text-font-family;
  @if $site-title-text-hidden == true {
    display: none;
  }
}

.is-hidden-use-css-variables-false {
  @if $use-css-variables == false {
    display: none;
  }
}
</style>
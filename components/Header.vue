<template>
  <header class="header">
    <div class="inner">
      <div class="box is-flex is-middle is-between">
        <div class="box is-flex is-middle">
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
          <NavLinks class="can-hide"/>
        </div>
        <div class="box">
          <SearchBox/>
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
  .search-box {
    @include mobile-tablet {
      display: none;
    }
  }
  .nav-links {
    @include mobile-tablet {
      display: none;
    }
    @include desktop {
      display: flex;
    }
    .item {
      padding: $padding-size-xs;
      color: $light;
      font-weight: 700;
      .icon {
        color: $light;
      }
    }
  }
  .menu-button {
    @include desktop {
      display: none;
    }
  }
}

.logo,
.site-name {
  margin-right: $margin-size-md;
}

.logo,
.logo[src$=".svg"] {
  max-width: 200px;
}
</style>
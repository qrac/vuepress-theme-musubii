<template>
  <footer class="footer" v-if="$site.themeConfig.copylightName">
    <div class="inner">
      <p class="text is-light is-strong is-center is-font-sans-en">
        <span class="text">©&nbsp;</span>
        <a
          class="text is-link-reverse"
          :href="$site.themeConfig.copylightUrl"
          v-if="$site.themeConfig.copylightUrl"
        >{{ $site.themeConfig.copylightName }}</a>
        <span class="text" v-else>{{ $site.themeConfig.copylightName }}</span>
        <span class="text">&nbsp;{{ copylightYear }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    copylightYear() {
      const _now = new Date();
      return _now.getFullYear();
    }
  }
};
</script>

<style lang="scss">
@import "@temp/palette.scss";

.footer {
  padding: $padding-size-xl $padding-size-sm;
  background-color: $convert-footer-background-color;
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
</style>
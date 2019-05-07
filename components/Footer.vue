<template>
  <footer class="footer">
    <div class="inner">
      <p class="text is-light is-strong is-center is-font-nunito" v-if="musubiiPkg.license">
        <span class="text">License:&nbsp;</span>
        <span class="text">{{ musubiiPkg.license }}</span>
        &nbsp;/&nbsp;
        <span class="text">©&nbsp;</span>
        <a
          class="text is-link-reverse"
          :href="musubiiPkg.organization.url"
          v-if="musubiiPkg.organization.url"
        >{{ musubiiPkg.organization.name }}</a>
        <span class="text">&nbsp;{{ copylightYear }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
import musubiiPkg from "musubii/package.json";

export default {
  computed: {
    musubiiPkg() {
      return musubiiPkg;
    },
    copylightYear() {
      const _now = new Date();
      return _now.getFullYear();
    }
  }
};
</script>

<style lang="scss">
@import "@theme/styles/variables.scss";

.footer {
  padding: 1.5em 0;
  background-color: $blue-grey-800;
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
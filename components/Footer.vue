<template>
  <footer class="section is-footer">
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

.section.is-footer {
  padding: 2.5em 0;
  background-color: $primary;
}
</style>
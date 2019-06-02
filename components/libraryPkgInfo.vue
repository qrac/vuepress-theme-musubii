<template>
  <p class="text is-light is-center is-sm is-strong is-font-sans-en" v-if="libraryPkgFile">
    <i class="fab fa-github" aria-hidden="true"></i>
    <span class="text" v-if="libraryPkgFile.version">v{{ libraryPkgFile.version }}・</span>
    <span class="text" v-if="libraryPkgFile.license">{{ libraryPkgFile.license }}・</span>
    <a class="text is-link-reverse" :href="libraryPkgFile.repository">
      <span class="text">Repository</span>
    </a>
    <span class="text" v-if="libraryPkgFile.repository">・</span>
    <a class="text is-link-reverse" :href="libraryPkgFile.repository + '/releases'">
      <span class="text">Releases</span>
    </a>
  </p>
</template>

<script>
import libraryPkgFile from "musubii/package.json";

export default {
  computed: {
    libraryPkgFile() {
      if (typeof libraryPkgFile !== "undefined") {
        return libraryPkgFile;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@temp/palette.scss";
</style>
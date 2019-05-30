<template>
  <div class="home is-wide-lg">
    <section class="section is-hero">
      <div class="inner is-padding-right-md is-padding-left-md">
        <div class="grid is-middle is-center is-gap-xxl">
          <div class="column is-space">
            <p class="text is-light is-weight-700 is-font-sans-en" v-if="data.hero.heading1">
              <span class="text is-block is-hero-1">{{ data.hero.heading1 }}</span>
              <span
                class="text is-block is-hero-2"
                v-if="data.hero.heading2"
              >{{ data.hero.heading2 }}</span>
            </p>
            <h1 class="text is-light is-line-height-lg is-sm" v-if="data.hero.texts">
              <span
                class="text is-fablet-block"
                v-for="text in data.hero.texts"
                :key="text.id"
              >{{ text }}</span>
            </h1>
            <div class="box is-flex is-center is-lg" v-if="data.actionText && data.actionLink">
              <router-link
                class="button is-plain is-hero is-round is-mobile-full"
                :to="data.actionLink"
              >
                <i class="fas fa-book is-margin-right-sm" aria-hidden="true"></i>
                <span class="text is-weight-900 is-font-sans-en">{{ data.actionText }}</span>
              </router-link>
            </div>
            <p
              class="text is-light is-center is-sm is-strong is-font-sans-en"
              v-if="musubiiPkg.repository"
            >
              <i class="fab fa-github" aria-hidden="true"></i>
              <span class="text" v-if="musubiiPkg.version">v{{ musubiiPkg.version }}・</span>
              <a class="text is-link-reverse" :href="musubiiPkg.repository">
                <span class="text">Repository</span>
              </a>
              <span class="text" v-if="musubiiPkg.repository">・</span>
              <a class="text is-link-reverse" :href="musubiiPkg.repository + '/releases'">
                <span class="text">Releases</span>
              </a>
            </p>
          </div>
          <div class="column" v-if="data.hero.image">
            <img
              class="illust is-hero"
              :src="$withBase(data.hero.imageDark)"
              alt="hero"
              v-if="getTheme === 'dark' && data.hero.imageDark"
            >
            <img class="illust is-hero" :src="$withBase(data.hero.image)" alt="hero" v-else>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-about" v-if="data.about.heading">
      <div class="inner is-padding-right-md is-padding-left-md is-space">
        <h2
          class="text is-primary is-strong is-center is-lg is-fablet-xl is-tablet-xxl"
        >{{ data.about.heading }}</h2>
        <p class="text is-line-height-lg is-center is-sm" v-if="data.about.texts1">
          <span
            class="text is-inline-block"
            v-for="text in data.about.texts1"
            :key="text.id"
          >{{ text }}</span>
          <br>
          <span
            class="text is-inline-block"
            v-for="text in data.about.texts2"
            :key="text.id"
          >{{ text }}</span>
        </p>
      </div>
    </section>

    <section class="section is-feature" v-for="feature in data.features" :key="feature.id">
      <div class="inner is-padding-right-md is-padding-left-md">
        <div class="grid is-middle is-center is-gap-xl">
          <div class="column" v-if="feature.image">
            <img
              class="illust is-home-point is-desktop-lg is-wide-xl"
              :src="$withBase(feature.image)"
              alt="feature"
            >
          </div>
          <div class="column">
            <div class="description is-home-point is-space">
              <h2 class="text is-xl" v-if="feature.heading">
                <span class="text">{{ feature.heading }}</span>
                <span class="badge is-plain is-info is-xxs" v-if="feature.new === true">
                  <span class="text is-strong">NEW</span>
                </span>
              </h2>
              <p class="text is-line-height-lg is-sm" v-if="feature.text">{{ feature.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import musubiiPkg from "musubii/package.json";
import { mapGetters } from "vuex";

console.log("test");

export default {
  //mounted() {
  //const library = this.data.library;
  //const libraryPkg = await import(library + "/package.json");
  //console.log(libraryPkg);
  //},
  computed: {
    ...mapGetters(["getTheme"]),
    data() {
      return this.$page.frontmatter;
    },
    musubiiPkg() {
      return musubiiPkg;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },
    copylightYear() {
      const _now = new Date();
      return _now.getFullYear();
    }
  }
};
</script>

<style lang="scss">
@import "@temp/palette.scss";

.home {
  max-width: 100%;
  width: 100%;
}

.section.is-hero {
  padding: 2.5em 0 3.5em;
  background-color: $hero-background-color;
}

.section.is-about {
  padding: 3em 0;
}

.section.is-feature {
  padding: 3em 0;
  &:nth-child(odd) {
    background-color: $convert-background-2;
  }
  &:nth-child(even) .grid {
    flex-direction: row-reverse;
  }
}

.text.is-hero-1 {
  font-size: 16.75vw;
  line-height: 1.1;
  white-space: nowrap;
  @include tablet() {
    font-size: 4.475em;
  }
}

.text.is-hero-2 {
  font-size: 11vw;
  line-height: 1.1;
  white-space: nowrap;
  @include tablet() {
    font-size: 2.965em;
  }
}

.button.is-plain.is-hero {
  background-color: $light;
  color: $convert-hero-background-color;
  &:hover {
    background-color: $light-1;
  }
}

.illust.is-hero {
  width: 90vw;
  @include tablet {
    width: 23.5em;
  }
  @include desktop {
    margin-left: 28px;
  }
}

.illust.is-home-point {
  width: 12em;
}

.description.is-home-point {
  max-width: 25.45em;
}
</style>
<template>
  <main class="home is-wide-lg">
    <section class="section is-hero">
      <div class="inner is-padding-md">
        <div class="grid is-middle is-center is-gap-xxl">
          <div class="column is-space">
            <p class="text is-light is-weight-700 is-font-nunito" v-if="data.hero.heading1">
              <span class="text is-block is-hero-1">{{ data.hero.heading1 }}</span>
              <span
                class="text is-block is-hero-2"
                v-if="data.hero.heading2"
              >{{ data.hero.heading2 }}</span>
            </p>
            <h1 class="text is-light is-sm" v-if="data.hero.texts">
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
                <span class="text is-weight-900 is-font-nunito">{{ data.actionText }}</span>
              </router-link>
            </div>
            <p class="text is-light is-center is-sm is-font-nunito" v-if="musubiiPkg.repository">
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
            <img class="illust is-hero" :src="$withBase(data.hero.image)" alt="hero">
          </div>
        </div>
      </div>
    </section>

    <section class="section is-about" v-if="data.about.heading">
      <div class="inner-vw is-space">
        <h2
          class="heading is-primary is-strong is-center is-lg is-fablet-xl is-tablet-xxl"
        >{{ data.about.heading }}</h2>
        <p class="texts is-sm is-center" v-if="data.about.texts1">
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
      <div class="inner-vw">
        <div class="grid is-middle is-center is-gap-3x">
          <div class="column" v-if="feature.image">
            <img
              class="obj is-home-point-illust is-desktop-lg is-wide-xl"
              :src="$withBase(feature.image)"
              alt="feature"
            >
          </div>
          <div class="column">
            <div class="group is-home-point-textbox is-space">
              <h2 class="heading is-xl" v-if="feature.heading">
                <span class="text">{{ feature.heading }}</span>
                <span class="obj is-badge is-new" v-if="feature.new === true">
                  <span class="text">NEW</span>
                </span>
              </h2>
              <p class="texts is-sm" v-if="feature.text">{{ feature.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import musubiiPkg from "musubii/package.json";

export default {
  computed: {
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
@import "@theme/styles/variables.scss";

.section.is-hero {
  padding: 1.5em 0 3em;
  background-color: $primary;
}

.section.is-about {
  padding: 3em 0;
}

.section.is-feature {
  padding: 3em 0;
  &:nth-child(odd) {
    background-color: $grey-50;
  }
  &:nth-child(even) .grid {
    flex-direction: row-reverse;
  }
}

.text.is-hero-1 {
  font-size: 16.75vw;
  line-height: 1.1;
  @include tablet() {
    font-size: 4.375em;
  }
}

.text.is-hero-2 {
  font-size: 11vw;
  line-height: 1.1;
  @include tablet() {
    font-size: 2.875em;
  }
}

.button.is-plain.is-hero {
  background-color: $light;
  color: $primary;
  &:hover {
    background-color: $light-1;
  }
}

.illust.is-hero {
  width: 90vw;
  @include tablet {
    width: 23.5em;
  }
}
</style>
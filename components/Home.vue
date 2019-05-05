<template>
  <div class="home is-wide-lg">
    <section class="section is-hero">
      <div class="inner-soft">
        <div class="grid is-middle is-center is-gap-6x">
          <div class="col is-space">
            <p class="heading is-light is-weight-700" v-if="data.hero.heading1">
              <span class="text is-block is-hero-1">{{ data.hero.heading1 }}</span>
              <span
                class="text is-block is-hero-2"
                v-if="data.hero.heading2"
              >{{ data.hero.heading2 }}</span>
            </p>
            <h1 class="texts is-light is-sm" v-if="data.hero.texts">
              <span
                class="text is-fablet-block"
                v-for="text in data.hero.texts"
                :key="text.id"
              >{{ text }}</span>
            </h1>
            <div class="btns is-center is-lg" v-if="data.actionText && data.actionLink">
              <router-link
                class="btn is-plain is-round is-mobile-full is-weight-900 is-cyan is-font-nunito"
                :to="data.actionLink"
              >
                <i class="fas fa-book" aria-hidden="true"></i>
                <span class="text">{{ data.actionText }}</span>
              </router-link>
            </div>
            <p class="texts is-light is-center is-sm is-font-nunito" v-if="musubiiPkg.repository">
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
          <div class="col" v-if="data.hero.image">
            <img class="obj is-hero-illust" :src="$withBase(data.hero.image)" alt="hero">
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
          <div class="col" v-if="feature.image">
            <img
              class="obj is-home-point-illust is-desktop-lg is-wide-xl"
              :src="$withBase(feature.image)"
              alt="feature"
            >
          </div>
          <div class="col">
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

    <footer class="section is-footer">
      <div class="inner">
        <p class="text is-sm is-light is-center" v-if="musubiiPkg.license">
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
  </div>
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
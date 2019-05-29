<template>
  <div class="theme" :class="pageClasses" :data-theme="getThemeName">
    <Header v-if="shouldShowNavbar" @toggle-menu="toggleMenu" :menu-open="menuOpen"/>
    <Menu :items="sidebarItems" :menu-open="menuOpen" class="is-desktop-none">
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Menu>
    <main class="main">
      <Home v-if="$page.frontmatter.home"/>
      <Page v-else :sidebar-items="sidebarItems">
        <slot name="page-top" slot="top"/>
        <slot name="page-bottom" slot="bottom"/>
      </Page>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import nprogress from "nprogress";
import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";
import Home from "@theme/components/Home.vue";
import Page from "@theme/components/Page.vue";
import Menu from "@theme/components/Menu.vue";
import { resolveSidebarItems } from "../util";

export default {
  components: { Home, Page, Menu, Header, Footer },
  data() {
    return {
      menuOpen: false
    };
  },
  computed: {
    ...mapGetters(["getThemeName"]),
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "is-no-navbar": !this.shouldShowNavbar,
          "is-menu-open": this.menuOpen,
          "is-no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    nprogress.configure({ showSpinner: false });
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start();
      }
      next();
    });
    this.$router.afterEach(() => {
      nprogress.done();
      this.menuOpen = false;
    });
  },
  methods: {
    toggleMenu(to) {
      this.menuOpen = typeof to === "boolean" ? to : !this.menuOpen;
    }
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<style lang="scss">
@import "@temp/palette.scss";
@import "@temp/style.scss";

.theme {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-top: $header-height;
  background-color: $body-background-color;
  color: $body-text-color;
  > .main {
    display: flex;
    flex: 1 0 0%;
  }
  > .footer {
    flex: none;
  }
}

pre[class*="language-"] {
  border-radius: $radius-sm;
  -webkit-overflow-scrolling: touch;
}

.is-font-sans-en {
  font-family: $font-sans-en;
}

body,
.header,
.section.is-hero,
.section.is-feature,
.menu,
.footer {
  //transition: $theme-change-transition;
}
</style>

<template>
  <div class="theme" :class="pageClasses">
    <Header v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar>
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
import nprogress from "nprogress";
import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";
import Home from "@theme/components/Home.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";

export default {
  components: { Home, Page, Sidebar, Header, Footer },

  data() {
    return {
      isSidebarOpen: false
    };
  },

  computed: {
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
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);

    // configure progress bar
    nprogress.configure({ showSpinner: false });

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start();
      }
      next();
    });

    this.$router.afterEach(() => {
      nprogress.done();
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    }
  }
};
</script>

<style src="@theme/styles/index.scss" lang="scss"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>

<style lang="scss">
@import "@theme/styles/variables.scss";

.theme {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "header"
    "aside"
    "main"
    "footer";
  min-height: 100vh;
  .header {
    grid-area: header;
  }
  .aside {
    grid-area: aside;
  }
  .main {
    grid-area: main;
  }
  .footer {
    grid-area: footer;
  }
}

.main-container {
}
</style>

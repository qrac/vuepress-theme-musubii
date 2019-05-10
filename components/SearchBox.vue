<template>
  <div class="search-box">
    <svg class="icon is-search" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m490.36 451.3-105.87-105.87a208.57 208.57 0 0 0 46.39-131.43c0-115.67-93.77-209.44-209.44-209.44s-209.44 93.73-209.44 209.44 93.77 209.4 209.44 209.4a208.44 208.44 0 0 0 114.13-33.8l108.25 108.24a32.91 32.91 0 1 0 46.54-46.54zm-167.36-135.79a143.6 143.6 0 1 1 42.06-101.51 142.65 142.65 0 0 1 -42.06 101.51z"
      ></path>
    </svg>
    <input
      class="input is-round is-mobile-full"
      type="search"
      placeholder="Search"
      @input="query = $event.target.value"
      aria-label="Search"
      :value="query"
      :class="{ 'is-focused': focused }"
      autocomplete="off"
      spellcheck="false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
      @keypress="waitGo"
    >
    <ul class="suggestions" v-if="showSuggestions" @mouseleave="unfocus">
      <li
        class="suggestion"
        v-for="(s, i) in suggestions"
        :class="{ 'is-focused': i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
        :key="(i)"
      >
        <a :href="s.path" @click.prevent>
          <span class="page-title">{{ s.title || s.path }}</span>
          <span v-if="s.header" class="page-header">&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS */
export default {
  data() {
    return {
      query: "",
      canGo: true,
      focused: false,
      focusIndex: 0
    };
  },
  computed: {
    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length;
    },
    suggestions() {
      const query = this.query.trim().toLowerCase();
      if (!query) {
        return;
      }
      const { pages } = this.$site;
      const max = SEARCH_MAX_SUGGESTIONS;
      const localePath = this.$localePath;
      const matches = item =>
        item.title && item.title.toLowerCase().indexOf(query) > -1;
      const res = [];
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break;
        const p = pages[i];
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue;
        }
        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue;
        }
        if (matches(p)) {
          res.push(p);
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break;
            const h = p.headers[j];
            if (matches(h)) {
              res.push(
                Object.assign({}, p, {
                  path: p.path + "#" + h.slug,
                  header: h
                })
              );
            }
          }
        }
      }
      return res;
    },
    // make suggestions align right when there are not enough items
    alignRight() {
      const navCount = (this.$site.themeConfig.nav || []).length;
      const repo = this.$site.repo ? 1 : 0;
      return navCount + repo <= 2;
    }
  },
  methods: {
    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== "/" && page.path.indexOf(localePath) === 0) {
          return localePath;
        }
      }
      return "/";
    },
    isSearchable(page) {
      let searchPaths = SEARCH_PATHS;
      // all paths searchables
      if (searchPaths === null) {
        return true;
      }
      searchPaths = Array.isArray(searchPaths)
        ? searchPaths
        : new Array(searchPaths);
      return (
        searchPaths.filter(path => {
          return page.path.match(path);
        }).length > 0
      );
    },
    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--;
        } else {
          this.focusIndex = this.suggestions.length - 1;
        }
      }
    },
    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++;
        } else {
          this.focusIndex = 0;
        }
      }
    },
    waitGo() {
      this.canGo = false;
    },
    go(i) {
      if (!this.showSuggestions || this.canGo) {
        return;
      }
      this.$router.push(this.suggestions[i].path);
      this.query = "";
      this.focusIndex = 0;
      this.canGo = false;
    },
    focus(i) {
      this.focusIndex = i;
    },
    unfocus() {
      this.focusIndex = -1;
    }
  }
};
</script>

<style lang="scss">
@import "@theme/styles/palette.scss";

.search-box {
  position: relative;
  font-family: Nunito, $font-sans;
  .icon.is-search {
    position: absolute;
    top: calc(1em + (1px * 1));
    left: 0.5625em;
    color: $grey-500;
    transform: translateY(-50%);
    z-index: 2;
  }
  .input[type="search"] {
    position: relative;
    height: calc(2em + (1px * 2));
    padding: 0.25em 0.75em;
    box-shadow: none;
    text-indent: 1.0375em;
    z-index: 1;
  }
  .suggestions {
    position: absolute;
    top: calc(2em + (1px * 2) + 0.25em);
    right: 0;
    width: 100%;
    padding: 0.5em;
    background-color: $convert-background-1;
    border: 1px solid $convert-border;
    border-radius: $radius-md;
    z-index: 3;
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 10%;
      display: block;
      width: 0;
      height: 0;
      border-left: 0.5em solid transparent;
      border-right: 0.5em solid transparent;
    }
    &:before {
      top: -0.5em;
      border-bottom: 0.5em solid $convert-border;
    }
    &:after {
      top: calc(-0.5em + 1px);
      border-bottom: 0.5em solid $convert-background-1;
    }
  }
  .suggestion {
    a {
      display: block;
      padding: 0.25em 0.5em;
      border-radius: $radius-sm;
      color: $convert-text-dark-3;
      .page-title {
        font-weight: 700;
      }
    }
    &.is-focused a {
      background-color: $convert-background-3;
      color: $convert-primary-strong;
    }
  }
}
</style>
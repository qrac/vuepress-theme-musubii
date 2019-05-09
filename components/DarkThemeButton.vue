<template>
  <div class="toggle-theme-button">
    <input type="checkbox" class="input is-hidden" id="theme-toggle" v-model="darkTheme">
    <label class="button is-outline is-circle is-sm" for="theme-toggle">
      <svg class="icon is-sun" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m434 265a14.13 14.13 0 0 1 0-18l51.9-59.23c4.35-5 2.64-10.22-3.79-11.67l-76.84-17.38a14.09 14.09 0 0 1 -10.6-14.6l7.24-78.45c.61-6.57-3.86-9.81-9.92-7.2l-72.43 31.11a14.08 14.08 0 0 1 -17.16-5.58l-40.26-67.74c-3.37-5.67-8.89-5.67-12.26 0l-40.25 67.74a14.11 14.11 0 0 1 -17.16 5.58l-72.38-31.13c-6.06-2.6-10.53.64-9.93 7.22l7.17 78.42a14.11 14.11 0 0 1 -10.61 14.6l-76.78 17.4c-6.44 1.46-8.15 6.72-3.8 11.68l51.86 59.23a14.13 14.13 0 0 1 0 18l-51.9 59.23c-4.35 5-2.64 10.22 3.79 11.67l76.84 17.38a14.09 14.09 0 0 1 10.6 14.6l-7.24 78.45c-.61 6.57 3.86 9.81 9.92 7.2l72.39-31.14a14.08 14.08 0 0 1 17.2 5.61l40.26 67.74c3.37 5.67 8.89 5.67 12.26 0l40.25-67.74a14.11 14.11 0 0 1 17.16-5.58l72.38 31.11c6.06 2.6 10.53-.64 9.93-7.22l-7.17-78.42a14.11 14.11 0 0 1 10.61-14.6l76.78-17.4c6.44-1.46 8.15-6.72 3.8-11.68zm-178 121a130 130 0 1 1 130-130 130 130 0 0 1 -130 130z"
        ></path>
        <circle cx="256" cy="256" r="90"></circle>
      </svg>
      <svg class="icon is-moon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m255.64 26a230.5 230.5 0 0 0 -48.85 5.29c-10.13 2.21-11.68 16.07-2.23 20.34a178.84 178.84 0 0 1 -111.62 337.74c-10.14-2.2-17.28 9.76-10.46 17.59a229.44 229.44 0 0 0 173.52 79.04c127 0 230-103 230-230s-103.43-230.2-230.36-230z"
        ></path>
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: this.initDarkTheme()
    };
  },
  methods: {
    initDarkTheme: function() {
      const darkTheme = localStorage.getItem("darkTheme");
      if (darkTheme === null) {
        //console.log("Nothing darkTheme; default to `false`");
        return false;
      } else {
        //console.log("Using darkTheme value " + darkTheme);
        return darkTheme == "true";
      }
    }
  },
  mounted() {
    //console.log("Dark Theme Mounted: " + this.darkTheme);
    if (this.darkTheme === true) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  },
  watch: {
    darkTheme: function() {
      localStorage.setItem("darkTheme", JSON.stringify(this.darkTheme));
      //console.log("Dark Theme: " + JSON.stringify(this.darkTheme));
      if (this.darkTheme === true) {
        document.body.setAttribute("data-theme", "dark");
      } else {
        document.body.setAttribute("data-theme", "light");
      }
    }
  }
};
</script>


<style lang="scss">
@import "@theme/styles/palette.scss";

.toggle-theme-button {
  .input[type="checkbox"] {
    &:focus + .button {
      box-shadow: $button-focus-shadow;
    }
  }
  .button {
    .icon {
      flex: none;
      width: 1.5em;
      height: 1.5em;
    }
  }
}

[data-theme="light"] {
  .toggle-theme-button {
    .button {
      .icon.is-sun {
        display: none;
      }
    }
  }
}

[data-theme="dark"] {
  .toggle-theme-button {
    .button {
      .icon.is-moon {
        display: none;
      }
    }
  }
}
</style>
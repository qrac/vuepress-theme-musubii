<template>
  <div class="toggle-theme-button">
    <input type="checkbox" class="input is-hidden" id="theme-toggle" v-model="darkTheme">
    <label class="button is-outline is-circle is-sm" for="theme-toggle">D</label>
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
@import "@theme/styles/variables.scss";
</style>
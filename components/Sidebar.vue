<template>
  <aside class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from "./SidebarLinks.vue";
import NavLinks from "./NavLinks.vue";

export default {
  name: "Sidebar",

  components: { SidebarLinks, NavLinks },

  props: ["items"]
};
</script>
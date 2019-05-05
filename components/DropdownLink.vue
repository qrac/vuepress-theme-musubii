<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <a class="dropdown-title" @click="toggle">
      <span class="title">{{ item.text }}</span>
      <span class="arrow" :class="open ? 'down' : 'right'"></span>
    </a>

    <ul class="nav-dropdown" v-show="open">
      <li class="dropdown-item" :key="subItem.link || index" v-for="(subItem, index) in item.items">
        <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

        <ul class="dropdown-subitem-wrapper" v-if="subItem.type === 'links'">
          <li
            class="dropdown-subitem"
            :key="childSubItem.link"
            v-for="childSubItem in subItem.items"
          >
            <NavLink :item="childSubItem"/>
          </li>
        </ul>

        <NavLink v-else :item="subItem"/>
      </li>
    </ul>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },

  data() {
    return {
      open: false
    };
  },

  props: {
    item: {
      required: true
    }
  },

  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>
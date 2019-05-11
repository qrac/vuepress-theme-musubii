<template>
  <div class="toggle-menu-button">
    <button type="button" class="button is-outline is-circle" @click="$emit('toggle-menu')">
      <span class="icon is-bars" aria-hidden="true">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </span>
    </button>
  </div>
</template>

<style lang="scss">
@import "@theme/styles/palette.scss";

.is-menu-open {
  .toggle-menu-button {
    .button.is-circle > .icon.is-bars {
      > .bar:nth-child(1) {
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
      }
      > .bar:nth-child(2) {
        opacity: 0;
      }
      > .bar:nth-child(3) {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }
}

.toggle-menu-button {
  display: flex;
  .button.is-circle {
    width: calc(2em + (1px * 2));
    height: calc(2em + (1px * 2));
    > .icon.is-bars {
      position: relative;
      flex: none;
      width: 1em;
      height: 0.875em;
      > .bar {
        position: absolute;
        left: 0;
        width: 100%;
        height: 0.1875em;
        background-color: $light;
        border-radius: 1px;
      }
      > .bar:nth-child(1) {
        top: 0;
      }
      > .bar:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
      }
      > .bar:nth-child(3) {
        top: 100%;
        transform: translateY(-100%);
      }
    }
    > .icon.is-bars,
    > .icon.is-bars > .bar {
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
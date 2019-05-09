<template>
  <button type="button" class="menu-button" @click="$emit('toggle-menu')">
    <span class="icon is-bars" aria-hidden="true">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </span>
  </button>
</template>

<style lang="scss">
@import "@theme/styles/palette.scss";

.menu-open {
  .menu-button {
    > .icon.is-bars {
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

.menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  > .icon.is-bars {
    position: relative;
    flex: none;
    width: 24px;
    height: 20px;
    > .bar {
      position: absolute;
      left: 0;
      width: 100%;
      height: 3px;
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
    transition: 0.12s ease-in;
  }
}
</style>
<template>
  <div>
    <nav
      :class="{ show: isShowRNB }">
    </nav>
    <div
      v-if="isShowRNB"
      class="nav-bg"
      @click="offNav('RNB')">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    isShowRNB () {
      return this.$store.state.navigation.isShowRNB;
    }
  },
  methods: {
    offNav(name) {
      this.$store.dispatch('navigation/offNav', name);
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background-color: tomato;
    transition: transform .4s;
    transform: translateX(300px);
    &.show {
      transform: translateX(0);
    }
  }
  .nav-bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    background-color: rgba(#000, .2);
  }
</style>
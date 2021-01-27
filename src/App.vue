<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <r-n-b></r-n-b>
    <icon-menu></icon-menu>
    <hot-focus></hot-focus>
  </div>
</template>

<script>
import LNB from "./components/LNB";
import MyHeader from "./components/MyHeader";
import Billboard from "./components/Billboard";
import RNB from "./components/RNB";
import IconMenu from "./components/IconMenu";
import HotFocus from "./components/HotFocus";


export default {
  components: {
    HotFocus,
    LNB,
    MyHeader,
    Billboard,
    RNB,
    IconMenu,
  }
}
</script>

<style lang="scss">
  @import "./scss/main";
</style>


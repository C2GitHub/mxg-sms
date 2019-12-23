<template>
  <div id="layout">
    <top-header></top-header>
    <left-nav></left-nav>
    <s-main></s-main>
  </div>
</template>

<script>
import topHeader from "./header";
import LeftNav from "./leftNavBar";
import sMain from "./mian";
export default {
  components: {
    topHeader,
    LeftNav,
    sMain
  }
};
</script>

<style lang="scss" scoped>
#layout {
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    background-color: #2d3a4b;
  }
  .leftNav {
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 230px;
    overflow: scroll-y;
    background-color: #545c64;
  }
  .main {
    position: absolute;
    top: 50px;
    left: 230px;
    right: 0;
    bottom: 0;
    padding: 10px;
  }
}
</style>

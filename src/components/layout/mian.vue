<template>
  <div class="main">
    <app-link v-show="$route.path !== '/home'"></app-link>
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from "./appLink";
export default {
  components: {
    AppLink
  }
};
</script>

<style lang="scss" scoped>
.main {
}
</style>

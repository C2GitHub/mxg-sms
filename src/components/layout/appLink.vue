<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: $route.path }">{{
      $route.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-breadcrumb__item {
  padding-left: 10px;
  border-left: 3px solid rgb(148, 207, 60);
}
</style>

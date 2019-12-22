<template>
  <div class="header">
    <a href="/" class="logo">
      <img src="@/assets/logo.png" class="logoImg" />
      <span class="logo-name">会员管理系统</span>
    </a>
    <div class="userInfo">
      <el-dropdown :hide-on-click="false" @command="handleCommand">
        <span class="el-dropdown-link">
          下拉菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="edit">
            <i class="el-icon-edit"></i> 信息修改
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            <i class="el-icon-s-fold"></i>退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  .logo {
    display: inline-block;
    margin-left: 50px;
    text-decoration: none;
    color: #fff;
  }
  .logoImg {
    width: 28px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .userInfo {
    float: right;
    margin-right: 30px;
    .el-dropdown {
      color: #fff;
    }
  }
}
</style>

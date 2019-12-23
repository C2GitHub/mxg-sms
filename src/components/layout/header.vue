<template>
  <div class="header">
    <a href="/" class="logo">
      <img src="@/assets/logo.png" class="logoImg" />
      <span class="logo-name">会员管理系统</span>
    </a>
    <div class="userInfo">
      <el-dropdown :hide-on-click="false" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ username }}
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
import { logout } from "@/api/login";
export default {
  data() {
    return {
      username: ""
    };
  },
  created() {
    let userInfo = localStorage.getItem("msm-userInfo");
    userInfo = userInfo ? userInfo : "[]";
    const username = JSON.parse(userInfo).name;
    this.username = username !== "undefined" ? username : "";
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "edit":
          break;
        case "logout":
          var token = localStorage.getItem("token");
          logout(token).then(res => {
            if (res.data.flag) {
              // 退出成功
              localStorage.removeItem("token");
              localStorage.removeItem("msm-userInfo");
              this.$router.push("/login");
            } else {
              // 退出失败
              this.$message({
                type: "error",
                message: res.data.message,
                duration: 1000
              });
            }
          });
          break;
        default:
          break;
      }
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

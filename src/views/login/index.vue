<template>
  <div class="login">
    <el-form
      class="form"
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit('form')">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          login(form.username, form.password).then(res => {
            const data = res.data;
            // 登录验证成功，保存token
            localStorage.setItem("token", data.data.token);
            if (data.flag) {
              // 根据token获取详细用户信息
              getUserInfo(data.token).then(res => {
                const info = res.data;
                if (info.flag) {
                  // 获取用户信息成功，本地保存
                  localStorage.setItem(
                    "msm-userInfo",
                    JSON.stringify(info.data)
                  );
                  // 跳转到首页
                  this.$router.push("/");
                } else {
                  this.$message({
                    type: "error",
                    message: info.message
                  });
                }
              });
            } else {
              this.$message({
                type: "error",
                message: data.message
              });
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background: #555;
  h1 {
    margin-bottom: 10px;
  }
  .form {
    width: 350px;
    padding: 28px;
    margin: 160px auto;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>

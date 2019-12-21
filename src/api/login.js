import { _axios } from "@/plugins/axios";

export function login(username, password) {
  return _axios({
    url: process.env.VUE_APP_proxyPath + "/user/login",
    method: "post",
    data: {
      username,
      password
    }
  });
}

export function getUserInfo(token) {
  return _axios({
    url: process.env.VUE_APP_proxyPath + "/user/info/" + token,
    method: "get"
  });
}

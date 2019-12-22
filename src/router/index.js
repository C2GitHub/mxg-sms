import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layout";
import Login from "../views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "/member",
        name: "member",
        component: () => import("@/views/member"),
        meta: {
          title: "会员管理"
        }
      },
      {
        path: "/supplier",
        name: "supplier",
        component: () => import("@/views/supplier"),
        meta: {
          title: "供应商管理"
        }
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("@/views/goods"),
        meta: {
          title: "商品管理"
        }
      },
      {
        path: "/staff",
        name: "staff",
        component: () => import("@/views/staff"),
        meta: {
          title: "员工管理"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 首页登陆验证
  if (to.path === "/") {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;

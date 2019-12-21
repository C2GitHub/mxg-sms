module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8001,
    open: true,
    host: "127.0.0.1",
    proxy: {
      [process.env.VUE_APP_proxyPath]: {
        target: process.env.VUE_APP_baseUrl,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_proxyPath]: "/"
        }
      }
    }
  }
};

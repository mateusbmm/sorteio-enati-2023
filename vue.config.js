const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/users': {
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true
      },
    }
  }
})

const isH5 = process.env.CLIENT_ENV === 'h5'
const HOST = 'http://localhost:10088'

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST:"/api"
  },
  mini: {},
  h5: {
    esnextModules: ['taro-ui'],
    devServer: {
      proxy: {
        '/api/': {
          target: HOST,
          pathRewrite: {
            '^/api/': '/'
          },changeOrigin: true
        }
      }
    }
  }
}

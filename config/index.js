module.exports = {
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
  },
  build:{
    env: require('./prod.env'),
    assetsPublicPath: './',
  }
}
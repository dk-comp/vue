module.exports = {
  lintOnSave: false,
  devServer: {
    public: 'rozetki.sweetrewenge.com:3010'
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/sass/_init.sass";`
      }
    }
  },
}

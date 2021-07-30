module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: '@import "@/assets/scss/styles.scss";',
        },
      },
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/my_projects/'
    : '/',
    productionSourceMap: false, 
    filenameHashing: true
  }; 
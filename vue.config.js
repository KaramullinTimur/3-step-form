module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/scss/base.scss";
                    @import "@/assets/scss/common.scss";
                    @import "@/assets/scss/variables.scss";
                `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/3-step-form/'
      : '/'
};
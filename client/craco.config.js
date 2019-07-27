const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            "@primary-color": "#2371e2",
            "@link-color": "#1DA57A",
            "@border-radius-base": "5px",
            "@layout-body-background": "#f2f9fb",
            "@layout-header-background": "#0f59c3"
          },
          javascriptEnabled: true
        }
      }
    }
  ]
};

const {
    override,
    addDecoratorsLegacy,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias
  } = require("customize-cra");
const path = require("path");

module.exports = override(
    // do stuff with the webpack config...

    //启用ES7的修饰器语法（babel 7）
    addDecoratorsLegacy(),

    // 引入antd
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }),
    //配置别名
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      'pages': path.resolve(__dirname, 'src/pages'),
    }),
    //引入less
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#1DA57A'
      }
    }),
    //   (config) => {
    //     config.module.rules[2].oneOf[5].use.push({
    //         loader: 'sass-resources-loader',
    //         options: {
    //           resources:  path.resolve(__dirname, 'src/assets/styles/common.scss')
    //         }
    //     })
    //     return config
    //   }
)
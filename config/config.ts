import { defineConfig } from 'umi';
import { resolve } from "path";
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: '/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'browser',
  },
  routes,
  alias: {
    "@": resolve(__dirname, "../src"),
    "@config": resolve(__dirname, "./")
  },
  proxy: {
    "/apis": {
      target: "http://trilateral.test.sigcms.com",
      changeOrigin: true
    }
  }
  // treeShaking: true, //用于描述移除 JavaScript 上下文中的未引用代码
  // plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   ['umi-plugin-react', {
  //     antd: true,
  //     dva: true,
  //     dynamicImport: {
  //       webpackChunkName: true,
  //       loadingComponent: './components/PageLoading/index.js'
  //     },
  //     title: 'antd-umi-2.6',
  //     dll: true,
  //     locale: {
  //       enable: true,
  //       default: 'zh-CN',//'en-US',
  //     },
  //     routes: {
  //       exclude: [
  //         /models\//,
  //         /services\//,
  //         /model\.(t|j)sx?$/,
  //         /service\.(t|j)sx?$/,
  //         /components\//,
  //       ],
  //     },
  //     scripts: [

  //     ],
  //   }],
  // ],
});
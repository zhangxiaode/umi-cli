import { defineConfig } from 'umi';
import { resolve } from "path";
import routes from './routes';

export default defineConfig({
  base: '/',
  treeShaking: true, //用于描述移除 JavaScript 上下文中的未引用代码
  history: {
    type: 'hash'
  }, //hash路由
  hash: true, //生成hash文件名
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/PageLoading/index.js'
      },
      title: 'antd-umi-2.6',
      dll: true,
      locale: {
        enable: true,
        default: 'zh-CN',//'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      scripts: [

      ],
    }],
  ],
  alias: {
    "@": resolve(__dirname, "../src")
  },
  proxy: {
    "/apis": {
      target: "http://trilateral.test.sigcms.com",
      changeOrigin: true
    }
  },
  routes
});
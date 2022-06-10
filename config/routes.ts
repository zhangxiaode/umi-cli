export default [
  { 
    path: '/', 
    redirect: '/user/list'
  },
  { 
    path: '/login', 
    component: '@/pages/login/index', 
    exact: true,
    title: '登录'
  },
  { 
    path: '/404', 
    component: '@/pages/404/index', 
    exact: true,
    title: '404'
  },
  {
    path: '/user',
    component: '@/layouts/index',
    title: '用户管理',
    meta: {
      key: 'User',
      icon: 'assets/logo.png',
      code: 10000000
    },
    routes: [
      { 
        path: '/user', 
        redirect: '/user/list', 
        exact: true
      },
      { 
        path: '/user/list', 
        component: '@/pages/user/list/index',
        exact: true, 
        title: '用户列表',
        meta: {
          key: 'UserList',
          code: 10000001,
        },
        wrappers: [
          '@/wrappers/auth',
        ]
      },
      { 
        path: '/user/detail', 
        component: '@/pages/user/detail/index',
        exact: true, 
        title: '用户详情',
        meta: {
          key: 'UserDetail',
          code: 10000002,
          hidden: true
        },
        wrappers: [
          '@/wrappers/auth',
        ]
      },
      { 
        path: '/user/new', 
        component: '@/pages/user/new/index',
        exact: true, 
        title: '新增用户',
        meta: {
          key: 'UserNew',
          code: 10000003,
          hidden: true
        },
        wrappers: [
          '@/wrappers/auth',
        ]
      },
    ]
  },
  {
    path: '/goods',
    component: '@/layouts/index',
    title: '商品管理',
    meta: {
      key: 'Goods',
      icon: 'assets/404.png',
      code: 10000010
    },
    routes: [
      { 
        path: '/goods', 
        redirect: '/goods/list', 
        exact: true
      },
      { 
        path: '/goods/list', 
        component: '@/pages/goods/list/index',
        exact: true, 
        title: '商品列表',
        meta: {
          key: 'GoodsList',
          code: 10000011,
        },
        wrappers: [
          '@/wrappers/auth',
        ]
      },
      { 
        path: '/goods/detail', 
        component: '@/pages/goods/detail/index',
        exact: true, 
        title: '商品详情',
        meta: {
          key: 'GoodsDetail',
          code: 10000012,
          hidden: true
        },
        wrappers: [
          '@/wrappers/auth',
        ]
      },
      { 
        path: '/goods/new', 
        component: '@/pages/goods/new/index',
        exact: true, 
        title: '新增商品',
        meta: {
          key: 'GoodsNew',
          code: 10000013,
          hidden: true
        },
        wrappers: [
          '@/wrappers/auth',
        ]
      },
    ]
  }
];
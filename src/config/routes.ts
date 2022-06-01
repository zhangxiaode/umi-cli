export default [
  { path: '/login', component: '@/pages/login/index' },
  {
    path: '/',
    component: '@/layouts/index',
    redirect: '/list',
    routes: [
      { path: '/list', component: '@/pages/list/index' },
      { path: '/admin', component: '@/pages/admin/index' },
    ]
  }
];
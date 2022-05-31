export default [
  { path: '/login', component: 'login' },
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
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/register', component: '@/pages/register/register' },
    { path: '/qkadmin', component: '@/pages/qkadmin/qkadmin' },
  ],
  fastRefresh: {},
});

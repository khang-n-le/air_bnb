import { Home, Search } from '../pages';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/upload',
    component: '',
    layout: '',
  },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };

import { Home, Search, RoomDetail } from '../pages';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/search/:id',
    component: Search,
  },
  {
    path: '/upload',
    component: '',
    layout: '',
  },
  {
    path: '/room/:id',
    component: RoomDetail,
    layout: '',
  },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };

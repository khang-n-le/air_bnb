import UserProfile from 'pages/UserProfile';
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
  {
    path: '/users/:id',
    component: UserProfile,
    layout: '',
  }
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };

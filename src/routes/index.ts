import configs from '../configs';

// Component
import Play from '@pages/Play';

const publicRoutes: any[] = [
  {
    path: configs.routes.home,
    component: Play,
  },
  {
    path: configs.routes.play,
    component: Play,
  },
];

export { publicRoutes };

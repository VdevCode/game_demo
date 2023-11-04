import configs from '../configs';

// Component
import Play from '@pages/Play';
import ChoiceSelector from '@pages/ChoiceSelector';
import ChoiceJob from '@pages/ChoiceJob';
import Home from '@pages/Home';
import Caculate from '@pages/Caculate';

const publicRoutes: any[] = [
  {
    path: configs.routes.home,
    component: Home,
  },
  {
    path: configs.routes.choiceJob,
    component: ChoiceJob,
  },
  {
    path: configs.routes.choiceCharactor,
    component: ChoiceSelector,
  },
  {
    path: configs.routes.play,
    component: Play,
  },
  {
    path: configs.routes.caculate,
    component: Caculate,
  },
];

export { publicRoutes };

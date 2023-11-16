import configs from '../configs';

// Component
import ChoiceJob from '@pages/ChoiceJob';
import ChoiceSelector from '@pages/ChoiceSelector';
import Home from '@pages/Home';
import Play from '@pages/Play';
import Ranking from '@pages/Ranking';
import Register from '@pages/Register';
import RandomGift from '@pages/RandomGift';
import UpdateGift from '@pages/UpdateGift';

const publicRoutes: any[] = [
  {
    path: configs.routes.home,
    component: Home,
  },
  {
    path: configs.routes.register,
    component: Register,
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
    path: configs.routes.ranking,
    component: Ranking,
  },
  {
    path: configs.routes.randomGift,
    component: RandomGift,
  },
  {
    path: configs.routes.updateGift,
    component: UpdateGift,
  },
];

export { publicRoutes };

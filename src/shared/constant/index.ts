import images from '../assets/images';
import { IBarryDefalt, IBirdDefault, IHelpDefalt } from '../interfaces';
import { typeHepls } from '../interfaces/enum';

export const CHARACTORS: IBirdDefault[] = [
  {
    h: 50,
    w: 70,
    hp: 100,
    speed: 0.35,
    imgAvatar: images.charactor1_avatar,
    imgDefault: images.CHARACTOR1_DEFAULT,
    imgUpping: images.CHARACTOR1_UPPING,
    imgDown: images.CHARACTOR1_DOWN,
    imgDie: images.CHARACTOR1_DIE,
    imgWin: images.CHARACTOR1_WIN,
    name: 'Ong vui vẻ',
    introl:
      'Sống vui vẻ, cười mỗi ngày. Ong vui vẻ luôn mang lại năng lượng tích cực cho mọi người xung quanh.',
    role: 0,
  },
  {
    h: 40,
    w: 60,
    hp: 100,
    speed: 0.35,
    imgAvatar: images.charactor2_avatar,
    imgDefault: images.CHARACTOR2_DEFAULT,
    imgUpping: images.CHARACTOR2_UPPING,
    imgDown: images.CHARACTOR2_DOWN,
    imgDie: images.CHARACTOR2_DIE,
    imgWin: images.CHARACTOR2_WIN,
    name: 'Ong chăm chỉ',
    introl:
      'Cô ấy rất chăm chỉ trong công việc của mình, tuy nhiên, cũng có lúc cô ấy cần nghỉ ngơi và giải trí.',
    role: 0,
  },
  {
    h: 40,
    w: 60,
    hp: 100,
    speed: 0.35,
    imgAvatar: images.charactor3_avatar,
    imgDefault: images.CHARACTOR3_DEFAULT,
    imgUpping: images.CHARACTOR3_UPPING,
    imgDown: images.CHARACTOR3_DOWN,
    imgDie: images.CHARACTOR3_DIE,
    imgWin: images.CHARACTOR3_WIN,
    name: 'Ong tích cực',
    introl:
      'Ong tích cực luôn hướng đến mục tiêu và không ngừng nỗ lực để đạt được điều đó.',
    role: 0,
  },
];

export const BARRIES: IBarryDefalt[] = [
  {
    w: 80,
    h: 80,
    img: images.ENEMY1_DEFAULT,
    imgDie: images.ENEMY1_DOWN,
    damage: 10,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.ENEMY2_DEFAULT,
    imgDie: images.ENEMY2_DOWN,
    damage: 20,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.ENEMY3_DEFAULT,
    imgDie: images.ENEMY3_DOWN,
    damage: 30,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.ENEMY4_DEFAULT,
    imgDie: images.ENEMY4_DOWN,
    damage: 40,
    ellipsed: false,
    isDetroying: false,
  },
];

export const GIFTS: any = [
  [
    {
      w: 20,
      h: 35,
      img: images.ITEM_IT1,
      mark: 1,
      active: false,
    },
    {
      w: 25,
      h: 25,
      img: images.ITEM_IT2,
      mark: 2,
      active: false,
    },
    {
      w: 25,
      h: 25,
      img: images.ITEM_IT3,
      mark: 3,
      active: false,
    },
    {
      w: 50,
      h: 50,
      img: images.ITEM_IT4,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_IT5,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_IT6,
      mark: 3,
      active: false,
    },
  ],
  [
    {
      w: 20,
      h: 35,
      img: images.ITEM_GAME1,
      mark: 1,
      active: false,
    },
    {
      w: 25,
      h: 25,
      img: images.ITEM_GAME2,
      mark: 2,
      active: false,
    },
    {
      w: 55,
      h: 55,
      img: images.ITEM_GAME3,
      mark: 3,
      active: false,
    },
    {
      w: 50,
      h: 50,
      img: images.ITEM_GAME4,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_GAME5,
      mark: 3,
      active: false,
    },
    {
      w: 50,
      h: 40,
      img: images.ITEM_GAME6,
      mark: 3,
      active: false,
    },
  ],
  [
    {
      w: 20,
      h: 35,
      img: images.ITEM_GRAFIC1,
      mark: 1,
      active: false,
    },
    {
      w: 25,
      h: 25,
      img: images.ITEM_GRAFIC2,
      mark: 2,
      active: false,
    },
    {
      w: 55,
      h: 55,
      img: images.ITEM_GRAFIC3,
      mark: 3,
      active: false,
    },
    {
      w: 50,
      h: 50,
      img: images.ITEM_GRAFIC4,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 40,
      img: images.ITEM_GRAFIC5,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_GRAFIC6,
      mark: 3,
      active: false,
    },
  ],
  [
    {
      w: 20,
      h: 35,
      img: images.ITEM_TRAVEL1,
      mark: 1,
      active: false,
    },
    {
      w: 25,
      h: 25,
      img: images.ITEM_TRAVEL2,
      mark: 2,
      active: false,
    },
    {
      w: 55,
      h: 55,
      img: images.ITEM_TRAVEL3,
      mark: 3,
      active: false,
    },
    {
      w: 50,
      h: 50,
      img: images.ITEM_TRAVEL4,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_TRAVEL5,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_TRAVEL6,
      mark: 3,
      active: false,
    },
  ],
  [
    {
      w: 20,
      h: 35,
      img: images.ITEM_ELECTRIC1,
      mark: 1,
      active: false,
    },
    {
      w: 25,
      h: 25,
      img: images.ITEM_ELECTRIC2,
      mark: 2,
      active: false,
    },
    {
      w: 55,
      h: 55,
      img: images.ITEM_ELECTRIC3,
      mark: 3,
      active: false,
    },
    {
      w: 50,
      h: 50,
      img: images.ITEM_ELECTRIC4,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_ELECTRIC5,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_ELECTRIC6,
      mark: 3,
      active: false,
    },
  ],
  [
    {
      w: 20,
      h: 35,
      img: images.ITEM_ECONOMI1,
      mark: 1,
      active: false,
    },
    {
      w: 25,
      h: 25,
      img: images.ITEM_ECONOMI2,
      mark: 2,
      active: false,
    },
    {
      w: 55,
      h: 55,
      img: images.ITEM_ECONOMI3,
      mark: 3,
      active: false,
    },
    {
      w: 50,
      h: 50,
      img: images.ITEM_ECONOMI4,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_ECONOMI5,
      mark: 3,
      active: false,
    },
    {
      w: 60,
      h: 50,
      img: images.ITEM_ECONOMI6,
      mark: 3,
      active: false,
    },
  ],
];

export const HELPS: IHelpDefalt[] = [
  {
    h: 50,
    w: 50,
    img: images.HELP_SLOW,
    imgNotify: images.help_slow,
    isActive: false,
    type: typeHepls.SLOW,
  },
  {
    h: 50,
    w: 50,
    img: images.HELP_HP,
    imgNotify: images.help_hp,
    isActive: false,
    type: typeHepls.HP,
  },
  {
    h: 50,
    w: 50,
    img: images.HELP_SPEED,
    imgNotify: images.help_speed,
    isActive: false,
    type: typeHepls.BOOTS,
  },
];

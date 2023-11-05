import images from '../assets/images';
import { IBarryDefalt } from '../interfaces';

export const BARRIES: IBarryDefalt[] = [
  {
    w: 80,
    h: 80,
    img: images.ENEMY_1,
    imgDie: images.ENEMY_1_DOWN,
    damage: 10,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.ENEMY_2,
    imgDie: images.ENEMY_2_DOWN,
    damage: 20,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.ENEMY_3,
    imgDie: images.ENEMY_3_DOWN,
    damage: 30,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.ENEMY_4,
    imgDie: images.ENEMY_4_DOWN,
    damage: 40,
    ellipsed: false,
    isDetroying: false,
  },
];

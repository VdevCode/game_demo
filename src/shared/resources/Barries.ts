import images from '../assets/images';
import { IBarryDefalt } from '../interfaces';

export const BARRIES: IBarryDefalt[] = [
  {
    w: 80,
    h: 80,
    img: images.barries1,
    imgDie: images.barries1_down,
    damage: 10,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.barries2,
    imgDie: images.barries1_down,
    damage: 20,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.barries3,
    imgDie: images.barries3_down,
    damage: 30,
    ellipsed: false,
    isDetroying: false,
  },
  {
    w: 80,
    h: 80,
    img: images.barries4,
    imgDie: images.barries4_down,
    damage: 40,
    ellipsed: false,
    isDetroying: false,
  },
];

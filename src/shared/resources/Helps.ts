import images from '../assets/images';
import { IHelpDefalt } from '../interfaces';

export enum typeHepls {
  BOOTS = 'boots',
  SLOW = 'slow',
  HP = 'hp',
  MANA = 'mana',
}
export const HELPS: IHelpDefalt[] = [
  {
    h: 50,
    w: 50,
    img: images.help2,
    isActive: false,
    type: typeHepls.BOOTS,
  },
  {
    h: 20,
    w: 20,
    img: images.heart,
    isActive: false,
    type: typeHepls.HP,
  },
  {
    h: 50,
    w: 50,
    img: images.help2,
    isActive: false,
    type: typeHepls.BOOTS,
  },
  {
    h: 50,
    w: 50,
    img: images.heart,
    isActive: false,
    type: typeHepls.HP,
  },
];

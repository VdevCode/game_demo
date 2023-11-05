import images from '../assets/images';
import { IHelpDefalt } from '../interfaces';

export enum typeHepls {
  BOOTS = 'Speeding',
  SLOW = 'slow',
  HP = 'Healing',
  MANA = 'mana',
}
export const HELPS: IHelpDefalt[] = [
  {
    h: 50,
    w: 50,
    img: images.HELP_3,
    imgNotify: images.help3,
    isActive: false,
    type: typeHepls.SLOW,
  },
  {
    h: 50,
    w: 50,
    img: images.HELP_1,
    imgNotify: images.help1,
    isActive: false,
    type: typeHepls.HP,
  },
  {
    h: 50,
    w: 50,
    img: images.HELP_2,
    imgNotify: images.help2,
    isActive: false,
    type: typeHepls.BOOTS,
  },
  {
    h: 50,
    w: 50,
    img: images.HELP_3,
    imgNotify: images.help3,
    isActive: false,
    type: typeHepls.SLOW,
  },
];

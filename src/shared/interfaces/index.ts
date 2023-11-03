export interface IBird {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface IBarryDefalt {
  w: number;
  h: number;
  img: string;
  imgDie: string;
  damage: number;
  ellipsed: boolean;
  isDetroying: boolean;
}
export interface IBarries extends IBarryDefalt {
  x: number;
  y: number;
}
export interface IGiftDefalt {
  w: number;
  h: number;
  img: string;
  mark: number;
  active: boolean;
}
export interface IGift extends IGiftDefalt {
  x: number;
  y: number;
}
export interface IHelpDefalt {
  w: number;
  h: number;
  img: string;
  type: string;
  isActive: boolean;
}
export interface IHelp extends IHelpDefalt {
  x: number;
  y: number;
}

export interface IBird {
  x: number;
  y: number;
  w: number;
  h: number;
  isUpping: boolean;
  imgDefault: any;
  imgUpping: any;
  imgDown: any;
  imgDie: any;
  imgWin: any;
}
export interface IBarryDefalt {
  w: number;
  h: number;
  img: any;
  imgDie: any;
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
  img: any;
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
  img: any;
  imgNotify: string;
  type: string;
  isActive: boolean;
}
export interface IHelp extends IHelpDefalt {
  x: number;
  y: number;
}
export interface IBackGroundDefault {
  x: number;
  y: number;
  img: any;
}

export interface IBackGround extends IBackGroundDefault {
  using: boolean;
}

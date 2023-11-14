export interface IGameStore {
  major: number;
  bee: number;
  win: boolean;
  hp: number;
  defaultHp: number;
  barriesDefault: number;
  barries: number;
  coins: number;
}
export interface IUserLogin {
  message: string;
  data: IUser;
}
export interface IUserStore {
  status: boolean;
  user: null;
}
export interface IUser {
  address: number;
  avatar: string;
  counter: number;
  createdAt: string;
  email: string;
  history: [];
  isValidAccount: boolean;
  name: string;
  phone: string;
  role: 0 | 1;
  schools: string;
  _id: string;
}
export interface IGameStore {
  major: number;
  bee: number;
  win: boolean;
  hp: number;
}
export interface IBirdDefault {
  w: number;
  h: number;
  hp: number;
  speed: number;
  imgAvatar: string;
  imgDefault: any;
  imgUpping: any;
  imgDown: any;
  imgDie: any;
  imgWin: any;
  name: string;
  role: 0 | 1;
  introl: string;
}
export interface IBird extends IBirdDefault {
  x: number;
  y: number;
  isUpping: boolean;
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
  img: any;
}
export interface IBackGround extends IBackGroundDefault {
  x: number;
  y: number;
  using: boolean;
}

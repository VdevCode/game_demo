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
}
export interface IGift extends IGiftDefalt {
  x: number;
  y: number;
}

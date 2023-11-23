export interface IWeatherData {
  product: string;
  init: string;
  dataseries: IDatasery[];
}

export interface IDatasery {
  timepoint: number;
  cloudcover: number;
  lifted_index: number;
  prec_type: PrecType;
  prec_amount: number;
  temp2m: number;
  rh2m: string;
  wind10m: IWind10M;
  weather: string;
}

export enum PrecType {
  None = 'none',
}

export interface IWind10M {
  direction: Direction;
  speed: number;
}

export enum Direction {
  E = 'E',
  N = 'N',
  Ne = 'NE',
  Nw = 'NW',
  S = 'S',
  SE = 'SE',
}

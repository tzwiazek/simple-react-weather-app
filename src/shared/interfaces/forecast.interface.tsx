import { defaultStyleComponentInterface } from './styledComponents.interface';

export interface forecastInterface {
  key: number;
  temp: number;
  month: string;
  day: string;
  hour: number;
  feels: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ForecastWrapperInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ForecastHeaderTitleInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ForecastDescriptionInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TemperatureInterface extends defaultStyleComponentInterface {}
export interface TextInterface extends defaultStyleComponentInterface {
  firstToUpperCase?: boolean;
}

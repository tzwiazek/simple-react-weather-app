import { defaultStyleComponentInterface } from './styledComponents.interface';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ResultsInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CurrentWeatherWrapperInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WeatherIconInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChangeLocationInterface extends defaultStyleComponentInterface {}
export interface LocationImageInterface {
  onClick: () => void;
  theme: unknown;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TemperatureInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WeatherDetailsWrapperInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WeatherDetailsConteinerInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WeatherDetailInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WeatherDetailIconInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WeatherDetailDescriptionInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ForecastWrapperInterface extends defaultStyleComponentInterface {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ForecastInterface extends defaultStyleComponentInterface {}
export interface LabelInterface extends defaultStyleComponentInterface {
  color?: string;
  weight?: string;
  fontSize?: number;
  align?: string;
}

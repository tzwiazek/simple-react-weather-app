import { defaultStyleComponentInterface } from './styledComponents.interface';

export interface AppTitleInterface extends defaultStyleComponentInterface {
  showResult?: boolean | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WeatherContainerInterface extends defaultStyleComponentInterface {}

export interface State {
  submit: boolean;
  value: string;
  weatherInfo: weatherDataInfo | null;
  error: boolean;
  changeLocation: boolean;
}

export interface weatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface weatherDataInfo {
  city: string;
  country: string;
  main: string;
  temp: number;
  clouds: number;
  humidity: number;
  wind: number;
  sunset: string;
  sunrise: string;
  forecast: weatherDataInfoForecast[];
}

export interface weatherDataInfoForecast {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {
    pod?: string;
    country: string;
    id?: number;
    sunrise: number;
    sunset: number;
    type?: number;
  };
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface ForecastData {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: weatherDataInfoForecast[];
}

import React, { SyntheticEvent } from 'react';
import Search from '../search/search';
import Result from '../result/result';
import NotFound from '../not-found/not-found';
import { AppTitle, WeatherContainer } from './app.styles';
import {
  State,
  weatherData,
  weatherDataInfo,
  ForecastData,
} from '../../shared/interfaces/app.interface';
import { AppService } from './app.service';

class App extends React.Component {
  public componentDidMount(): void {
    AppService.toggleLocation$.subscribe(() => {
      this.setState({
        submit: false,
        value: '',
        weatherInfo: null,
        error: false,
        changeLocation: false,
      });
    });
  }

  readonly basicURL: Readonly<string> = process.env.REACT_APP_BASIC_URL as string;

  public state: Readonly<State> = {
    submit: false,
    value: '',
    weatherInfo: null,
    error: false,
    changeLocation: false,
  };

  private handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    this.setState({
      value: event.target.value,
    });
  };

  private handleSearch: (event: SyntheticEvent) => void = (event: SyntheticEvent): void => {
    event.preventDefault();
    const { value }: State = this.state;
    const APIkey: string | undefined = process.env.REACT_APP_WEATHER_API_KEY;

    const weather: string = `${this.basicURL}weather?q=${value}&appid=${APIkey}&units=metric`;
    const forecast: string = `${this.basicURL}forecast?q=${value}&APPID=${APIkey}&units=metric`;

    if (value.length === 0) {
      this.setState({
        submit: false,
        value: '',
        weatherInfo: null,
        error: false,
      });
    } else {
      Promise.all([fetch(weather), fetch(forecast)])
        .then(([weather, forecast]: [Response, Response]) => {
          if (weather.ok && forecast.ok) {
            return Promise.all([weather.json(), forecast.json()]);
          }
          throw Error(`${weather.statusText} ${forecast.statusText}`);
        })
        .then(([weather, forecast]: [weatherData, ForecastData]) => {
          const sunset: string = new Date(weather.sys.sunset * 1000).toLocaleTimeString();
          const sunrise: string = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();

          const weatherInfo: weatherDataInfo = {
            city: weather.name,
            country: weather.sys.country,
            main: weather.weather[0].main,
            temp: weather.main.temp,
            clouds: weather.clouds.all,
            humidity: weather.main.humidity,
            wind: weather.wind.speed,
            sunset,
            sunrise,
            forecast: forecast.list,
          };

          this.setState({
            submit: true,
            weatherInfo,
            error: false,
          });
        })
        .catch(() => {
          this.setState({
            submit: true,
            error: true,
            weatherInfo: null,
          });
        });
    }
  };

  public render(): JSX.Element {
    const { submit, value, weatherInfo, error }: State = this.state;
    return (
      <>
        <WeatherContainer>
          {!error && <AppTitle showResult={!!weatherInfo}>Weather app</AppTitle>}
          <Search
            value={value}
            showResult={(weatherInfo || error) && submit}
            change={this.handleInputChange}
            submit={this.handleSearch}
          />
          {weatherInfo && submit && <Result weather={weatherInfo} />}
          {error && <NotFound />}
        </WeatherContainer>
      </>
    );
  }
}

export default App;

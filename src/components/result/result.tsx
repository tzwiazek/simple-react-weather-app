import React from "react";
import ForecastHour from "../forecast/forecast";
import {
  Results,
  ChangeLocation,
  WeatherIcon,
  Temperature,
  LocationImage,
  CurrentWeatherWrapper,
  WeatherDetailsWrapper,
  WeatherDetailsConteiner,
  WeatherDetail,
  WeatherDetailIcon,
  WeatherDetailDescription,
  ForecastWrapper,
  Forecast,
  SmallLabel,
  MediumLabel,
  BigLabel,
  Text
} from "./result.styles";
import { weatherDataInfo, weatherDataInfoForecast } from "../../shared/interfaces/app.interface";
import cloudIcon from "../../assets/images/cloud.svg";
import sunIcon from "../../assets/images/sun.svg";
import dropIcon from "../../assets/images/drop.svg";
import rainIcon from "../../assets/images/rain.svg";
import snowyIcon from "../../assets/images/snowy.svg";
import thunderstormIcon from "../../assets/images/thunderstorm.svg";
import windIcon from "../../assets/images/wind.svg";
import sunriseIcon from "../../assets/images/sunrise.svg";
import sunsetIcon from "../../assets/images/sunset.svg";
import { AppService } from "../app/app.service";

const Result = ({ weather }: { weather: weatherDataInfo}): JSX.Element => {

  const {
    city,
    country,
    main,
    temp,
    humidity,
    wind,
    sunset,
    sunrise,
    forecast
  }: weatherDataInfo = weather;

  const forecasts: JSX.Element[] = forecast.map((item: weatherDataInfoForecast) => (
    <ForecastHour
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      // eslint-disable-next-line
      hour={(item.dt_txt as any).slice(11, 13) * 1}
      feels={item.main.feels_like}
    />
  ));

  function displayCurrentWeather(weather: string = main): string {
    if (weather.toLowerCase() === 'thunderstorm') {return thunderstormIcon;}
    else if (weather.toLowerCase() === 'drizzle') {return rainIcon;}
    else if (weather.toLowerCase() === 'rain') {return dropIcon;}
    else if (weather.toLowerCase() === 'snow') {return snowyIcon;}
    else if (weather.toLowerCase() === 'clear') {return sunIcon;}
    else if (weather.toLowerCase() === 'wind') {return windIcon;}
    else if (weather.toLowerCase() === 'sunrise') {return sunriseIcon;}
    else if (weather.toLowerCase() === 'sunset') {return sunsetIcon;}
    else {return cloudIcon;}
  }

  return (
    <Results>
      <CurrentWeatherWrapper>
        <WeatherIcon>
          <img src={displayCurrentWeather()} alt={`${displayCurrentWeather()}`} />
        </WeatherIcon>
        <BigLabel>{main}</BigLabel>
        <Temperature>{Math.floor(temp)}&#176;</Temperature>
        <Text>{city}, {country}</Text>
        <ChangeLocation>
          <SmallLabel onClick={() => AppService.toggleLocation$.next(true)}>Change location</SmallLabel>
          <LocationImage onClick={() => AppService.toggleLocation$.next(true)}></LocationImage>
        </ChangeLocation>
      </CurrentWeatherWrapper>
      <WeatherDetailsWrapper>
        <WeatherDetailsConteiner>

          <WeatherDetail>
            <WeatherDetailIcon>
              <img src={displayCurrentWeather('wind')} alt={`${displayCurrentWeather('wind')}`} />
            </WeatherDetailIcon>
            <WeatherDetailDescription>
              <SmallLabel align="center">Wind</SmallLabel>
              <Text align="center" weight="400">
                {wind}mph
              </Text>
            </WeatherDetailDescription>
          </WeatherDetail>

          <WeatherDetail>
            <WeatherDetailIcon>
              <img src={displayCurrentWeather('rain')} alt={`${displayCurrentWeather('rain')}`} />
            </WeatherDetailIcon>
            <WeatherDetailDescription>
              <SmallLabel align="center">Rain</SmallLabel>
              <Text align="center" weight="400">
                {humidity}%
              </Text>
            </WeatherDetailDescription>
          </WeatherDetail>

          <WeatherDetail>
            <WeatherDetailIcon>
              <img src={displayCurrentWeather('sunrise')} alt={`${displayCurrentWeather('sunrise')}`} />
            </WeatherDetailIcon>
            <WeatherDetailDescription>
              <SmallLabel align="center">Sunrise</SmallLabel>
              <Text align="center" weight="400">
                {sunrise}
              </Text>
            </WeatherDetailDescription>
          </WeatherDetail>

          <WeatherDetail>
            <WeatherDetailIcon>
              <img src={displayCurrentWeather('sunset')} alt={`${displayCurrentWeather('sunset')}`} />
            </WeatherDetailIcon>
            <WeatherDetailDescription>
              <SmallLabel align="center">Sunset</SmallLabel>
              <Text align="center" weight="400">
                {sunset}
              </Text>
            </WeatherDetailDescription>
          </WeatherDetail>

        </WeatherDetailsConteiner>
      </WeatherDetailsWrapper>
      <ForecastWrapper>
        <MediumLabel weight="400">Forecast</MediumLabel>
        <Forecast>{forecasts}</Forecast>
      </ForecastWrapper>
    </Results>
  );
};

export default Result;

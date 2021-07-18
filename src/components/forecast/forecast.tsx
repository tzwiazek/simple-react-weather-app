import React from "react";
import { forecastInterface } from "../../shared/interfaces/forecast.interface";
import { ForecastWrapper, ForecastHeaderTitle, ForecastDescription, Temperature, Text } from "./forecast.styles";

const ForecastHour = ({ temp, month, day, hour, feels }: forecastInterface): JSX.Element =>
  <ForecastWrapper>
    <ForecastHeaderTitle>
      <Text>{month}.{day}</Text>
      <Text>{hour}:00</Text>
    </ForecastHeaderTitle>
    <ForecastDescription>
      <Temperature>
        {temp}&#176;C
      </Temperature>
      <Text>Feels like {Math.floor(feels)}&#176;</Text>
    </ForecastDescription>
  </ForecastWrapper>
;

export default ForecastHour;

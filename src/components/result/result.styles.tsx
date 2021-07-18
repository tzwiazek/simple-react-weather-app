import styled from "styled-components";
import device from "../../responsive/Device";
import location from "../../assets/images/location.svg";
import ResultFadeIn from "../../shared/animations/ResultFadeIn";
import {
  ResultsInterface,
  CurrentWeatherWrapperInterface,
  WeatherIconInterface,
  ChangeLocationInterface,
  LocationImageInterface,
  TemperatureInterface,
  WeatherDetailInterface,
  WeatherDetailsWrapperInterface,
  ForecastInterface,
  ForecastWrapperInterface,
  LabelInterface,
  WeatherDetailsConteinerInterface,
  WeatherDetailDescriptionInterface,
  WeatherDetailIconInterface
} from "../../shared/interfaces/result.interface";
import { DeviceSize } from "../../shared/enums/deviceSize.enum";

const Results = styled.div<ResultsInterface>`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  opacity:0;
  visibility:hidden;
  position:relative;
  top:20px;
  animation:${ResultFadeIn} 0.3s 0.7s forwards;

  @media ${device.tablet} {
    overflow-x:hidden;
    height:calc(100vh - 130px);
  }
`;

const CurrentWeatherWrapper = styled.div<CurrentWeatherWrapperInterface>`
  justify-content:center;
  align-items:center;
  @media (max-width:${DeviceSize.mobileL}) {
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:100%;
  }

  @media ${device.mobileL} {
    width:50%;
  }
`;

const WeatherIcon = styled.div<WeatherIconInterface>`
  display:flex;
  width:110px;
  height:110px;

  @media (max-width:${DeviceSize.mobileL}) {
    width:100%;
    justify-content:center;
  }
`;

const ChangeLocation = styled.div<ChangeLocationInterface>`
  display:flex;
  align-items:center;
  cursor:pointer;
  @media (max-width:${DeviceSize.mobileL}) {
    width:100%;
    justify-content:center;
  }
`;

const LocationImage = styled.div<LocationImageInterface>`
  background:url(${location});
  width:20px;
  height:20px;
  background-repeat:no-repeat;
  margin-left:10px;
`;

const Temperature = styled.h3<TemperatureInterface>`
  display:block;
  font-size:50px;
  font-weight:400;
  color:#ffffff;
  @media ${device.tablet} {
    font-size:50px;
  }
  @media ${device.laptop} {
    font-size:70px;
  }
  @media ${device.laptopL} {
    font-size:90px;
  }

  @media (max-width:${DeviceSize.mobileL}) {
    width:100%;
    text-align:center;
  }
`;

const WeatherDetailsWrapper = styled.div<WeatherDetailsWrapperInterface>`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  padding:10px 0;
  margin:20px 0;
  border-radius:10px;
  align-self:flex-start;
  justify-content: center;

  @media ${device.tablet} {
    justify-content:flex-end;
  }

  @media ${device.mobileL} {
    width:50%;
  }
`;

const WeatherDetailsConteiner = styled.div<WeatherDetailsConteinerInterface>`
  width:100%;

  @media ${device.tablet} {
    width:25%;
  }
`;

const WeatherDetail = styled.div<WeatherDetailInterface>`
  width:100%;
  padding:10px;
  justify-content:space-around;
  align-items:center;
  display:flex;

  @media ${device.laptop} {
    padding:20px 10px;
  }
`;

const WeatherDetailIcon = styled.div<WeatherDetailIconInterface>`
  display:flex;
  width:60px;
  height:60px;
`;

const WeatherDetailDescription = styled.div<WeatherDetailDescriptionInterface>`
  display:block;
  width:110px;
`;

const ForecastWrapper = styled.div<ForecastWrapperInterface>`
  bottom:0;
  overflow:hidden;
  max-width:100vw;

  @media ${device.tablet} {
    position:absolute;
  }
`;

const Forecast = styled.div<ForecastInterface>`
  position:relative;
  display:flex;
  overflow-x:scroll;
  overflow-y:hidden;
  scrollbar-color:lightgray #ffffff;
  scrollbar-width:thin;
  margin-top:20px;
  padding-bottom:20px;

  &::-webkit-scrollbar {
    height:5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow:inset 0 0 5px grey;
    border-radius:10px;
  }

  &::-webkit-scrollbar-thumb {
    background:white;
    border-radius:10px;
  }
`;

const BigLabel = styled.h2<LabelInterface>`
  color:${(props: LabelInterface) => props.color || '#FFFFFF'};
  display:block;
  font-weight:${(props: LabelInterface) => props.weight || '600'};
  font-size:${(props: LabelInterface) => props.fontSize || '30px'};
  text-align:${(props: LabelInterface) => props.align || 'left'};
  padding:5px 0;
  @media ${device.tablet} {
    font-size:${(props: LabelInterface) => props.fontSize || '29px'};
  }
  @media ${device.laptop} {
    font-size:${(props: LabelInterface) => props.fontSize || '37px'};
  }
  @media ${device.laptopL} {
    font-size:${(props: LabelInterface) => props.fontSize || '43px'};
  }
`;

const MediumLabel = styled.h3<LabelInterface>`
color:${(props: LabelInterface) => props.color || '#FFFFFF'};
  display:block;
  font-weight:${(props: LabelInterface) => props.weight || '600'};
  font-size:${(props: LabelInterface) => props.fontSize || '23px'};
  text-align:${(props: LabelInterface) => props.align || 'left'};
  padding:5px 0;
  @media ${device.tablet} {
    font-size:${(props: LabelInterface) => props.fontSize || '23px'};
  }
  @media ${device.laptop} {
    font-size:${(props: LabelInterface) => props.fontSize || '26px'};
  }
  @media ${device.laptopL} {
    font-size:${(props: LabelInterface) => props.fontSize || '29px'};
  }
`;

const SmallLabel = styled.h4<LabelInterface>`
  color:${(props: LabelInterface) => props.color || '#FFFFFF'};
  display:block;
  font-weight:${(props: LabelInterface) => props.weight || '600'};
  font-size:${(props: LabelInterface) => props.fontSize || '15px'};
  text-align:${(props: LabelInterface) => props.align || 'left'};
  padding:5px 0;
  @media ${device.tablet} {
    font-size:${(props: LabelInterface) => props.fontSize || '14px'};
  }
  @media ${device.laptop} {
    font-size:${(props: LabelInterface) => props.fontSize || '17px'};
  }
  @media ${device.laptopL} {
    font-size:${(props: LabelInterface) => props.fontSize || '20px'};
  }
`;

const Text = styled.span<LabelInterface>`
  color: ${(props: LabelInterface) => props.color || '#FFFFFF'};
  display: block;
  font-size: ${(props: LabelInterface) => props.fontSize || '12px'};
  text-align: ${(props: LabelInterface) => props.align || 'left'};
  @media ${device.tablet} {
    font-size: ${(props: LabelInterface) => props.fontSize || '15px'};
  }
  @media ${device.laptop} {
    font-size: ${(props: LabelInterface) => props.fontSize || '17px'};
  }
  @media ${device.laptopL} {
    font-size: ${(props: LabelInterface) => props.fontSize || '19px'};
  }
`;

export {
  Results,
  ChangeLocation,
  WeatherIcon,
  CurrentWeatherWrapper,
  Temperature,
  LocationImage,
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
};
import styled from 'styled-components';
import device from '../../responsive/Device';
import {
  ForecastWrapperInterface,
  ForecastHeaderTitleInterface,
  ForecastDescriptionInterface,
  TemperatureInterface,
  TextInterface,
} from '../../shared/interfaces/forecast.interface';

const ForecastWrapper = styled.div<ForecastWrapperInterface>`
  flex-shrink: 0;
  padding: 10px;
  height: 200px;
  width: 200px;
  margin: 0 5px;
  border-radius: 5px;
  position: relative;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media ${device.tablet} {
    height: 250px;
  }
`;

const ForecastHeaderTitle = styled.div<ForecastHeaderTitleInterface>`
  display: flex;
  justify-content: space-between;
`;

const ForecastDescription = styled.div<ForecastDescriptionInterface>`
  position: absolute;
  bottom: 15px;
`;

const Temperature = styled.h3<TemperatureInterface>`
  display: block;
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
  @media ${device.laptopL} {
    font-size: 70px;
  }
`;

const Text = styled.span<TextInterface>`
  color: white;
  display: block;
  font-size: 14px;

  ${(props: TextInterface) =>
    props.firstToUpperCase &&
    `
    &:first-letter {
      text-transform:uppercase;
    }
  `}
`;

export { ForecastWrapper, ForecastHeaderTitle, ForecastDescription, Temperature, Text };

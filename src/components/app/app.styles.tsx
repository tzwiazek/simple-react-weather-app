import styled from 'styled-components';
import device from '../../responsive/Device';
import {
  AppTitleInterface,
  WeatherContainerInterface,
} from '../../shared/interfaces/app.interface';

const AppTitle = styled.h1<AppTitleInterface>`
  display: block;
  height: 64px;
  margin: 0;
  padding: 20px 0;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  transition: 0.3s 1.4s;
  opacity: 1;
  height: auto;
  position: relative;
  padding: 20px 0;
  font-size: 30px;
  top: 25%;
  text-align: center;
  transition: 0.5s;
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
  @media ${device.laptopL} {
    font-size: 60px;
  }
  @media ${device.desktop} {
    font-size: 70px;
  }

  ${(props: AppTitleInterface) =>
    props.showResult &&
    `
    display:none;
  `}
`;

const WeatherContainer = styled.div<WeatherContainerInterface>`
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

export { AppTitle, WeatherContainer };

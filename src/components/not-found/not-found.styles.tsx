import styled from 'styled-components';
import ResultFadeIn from '../../shared/animations/ResultFadeIn';
import location from '../../assets/images/location.svg';
import {
  LocationImageInterface,
  NotFoundContainerInterface,
  NotfoundIconInterface,
  NotFoundLocationInterface,
  NotFoundTextInterface,
} from '../../shared/interfaces/notFound.interface';

const NotFoundContainer = styled.div<NotFoundContainerInterface>`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  position: relative;
  border-radius: 10px;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  animation: ${ResultFadeIn} 0.5s 0.7s forwards;
  flex-wrap: wrap;
`;

const NotfoundIcon = styled.span<NotfoundIconInterface>`
  display: flex;
  text-align: center;
  color: #ffffff;
  font-size: 40px;
  margin-right: 10px;
  width: 120px;
`;

const NotFoundText = styled.span<NotFoundTextInterface>`
  color: #ffffff;
  font-size: 17px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NotFoundLocation = styled(NotFoundText)<NotFoundLocationInterface>`
  margin-top: 20px;
  cursor: pointer;
`;

const LocationImage = styled.div<LocationImageInterface>`
  background: url(${location});
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  margin-left: 10px;
`;

export { NotFoundContainer, NotfoundIcon, NotFoundText, NotFoundLocation, LocationImage };

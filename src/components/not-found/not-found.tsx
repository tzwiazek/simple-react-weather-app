import React from "react";
import error404Image from "../../assets/images/404.svg";
import { AppService } from "../app/app.service";
import { NotFoundContainer, NotfoundIcon, NotFoundText, NotFoundLocation, LocationImage  } from "./not-found.styles";

const NotFound = (): JSX.Element =>
  <NotFoundContainer>
    <NotfoundIcon>
      <img src={error404Image} alt="not found" />
    </NotfoundIcon>
    <NotFoundText>Sorry, the specified city was not found...</NotFoundText>
    <NotFoundLocation onClick={() => AppService.toggleLocation$.next(true)}>
      Change location <LocationImage></LocationImage>
    </NotFoundLocation>
  </NotFoundContainer>
;

export default NotFound;

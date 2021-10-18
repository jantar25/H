import React from "react";
import {
  Header,
  HeaderImg,
  Title,
} from "./Styles";

import ProgramImg from "../../../images/EventHeader.JPG";

const EventsHeader = () => {
  return (
    <Header>
    <HeaderImg src={ProgramImg} alt={ProgramImg} />
    <Title>Nos Programmes</Title>
  </Header>
      );
};

export default EventsHeader;
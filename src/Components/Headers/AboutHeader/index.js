import React from "react";
import {
  Header,
  HeaderImg,
  Title,
} from "./Styles";

import EventImg from "../../../images/EventHeader.JPG";

const EventsHeader = () => {
  return (
      <Header>
        <HeaderImg src={EventImg} alt={EventImg} />
        <Title>A Propos de nous</Title>
      </Header>
      );
};

export default EventsHeader;
import React from "react";
import Events from "../Events/Events";
import HomeBanner from "../HomeBanner/HomeBanner";
import AboutSection from "../AboutSection/AboutSection";
import { useState } from "react";
import Location from "../Location/Location";

const Main = (props) => {
  console.log(props);
  const [about] = useState(
    props.restaurantDetails === undefined ? {} : props.restaurantDetails
  );
  const [awards] = useState(props.awards === undefined ? [{}] : props.awards);
  console.log(awards);
  const [sustainabilityInitiatives] = useState(
    props.sustainabilityInitiatives === undefined
      ? [{}]
      : props.sustainabilityInitiatives
  );
  const [events] = useState(props.events === undefined ? {} : props.events);
  return (
    <>
      <HomeBanner />
      {/* <MenuSection /> */}
      <AboutSection
        restaurantDetails={about}
        awards={awards}
        sustainabilityInitiatives={sustainabilityInitiatives}
      />
      <Events events={events} />
    </>
  );
};

export default Main;

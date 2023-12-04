import React, { cloneElement } from "react";
import about from "../../images/about2.png";
import "./AboutSection.scss";
import { useState } from "react";

const AboutSection = (props) => {
  console.log(props);
  const { name, ambiance, chef } =
    props.restaurantDetails === undefined ? {} : props.restaurantDetails;
  const [awards] = useState(props.awards === undefined ? [{}] : props.awards);
  const [sustainabilityInitiatives] = useState(
    props.sustainabilityInitiatives === undefined
      ? [{}]
      : props.sustainabilityInitiatives
  );
  const [initiatives] = useState(
    sustainabilityInitiatives.initiatives === undefined
      ? []
      : sustainabilityInitiatives.initiatives
  );
  console.log(awards);
  return (
    <div className="about-section">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-6 pe-md-5">
            <div className="header-text">
              {name === undefined ? (
                <h1>My restaurant</h1>
              ) : (
                <h2> About {name}</h2>
              )}
              {undefined !== ambiance &&
              Object.keys(ambiance.description).length > 0 ? (
                <p>{ambiance.description}</p>
              ) : (
                <p>
                  This is a restaurant site. With this you can order the food of
                  your choice online.
                </p>
              )}
              <span> Initiatives</span>
              {initiatives === undefined || initiatives.length === 0 ? (
                <></>
              ) : (
                initiatives.map((initiative) => (
                  <p>
                    {initiative.name} {initiative.description}
                  </p>
                ))
              )}
            </div>
          </div>
          <div className="col-md-6 ps-md-5">
            <div className="img-box">
              <img className="img-fluid" src={about} alt="" />
            </div>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col-md-6 pe-md-5">
            <div className="header-text">
              {chef === undefined || Object.keys(chef.name).length === 0 ? (
                <></>
              ) : (
                <span> {chef.name}</span>
              )}
              {chef === undefined ||
              Object.keys(chef.bio).length === 0 ||
              Object.keys(chef.signature_dish).length === 0 ? (
                <></>
              ) : (
                <p>
                  {chef.bio} <h4>Signature Dish :{chef.signature_dish}</h4>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col-md-6 pe-md-5">
            <div className="header-text">
              <span>Awards and Achievements</span>
              {awards === undefined || awards.length === 0 ? (
                <></>
              ) : (
                awards.map((award) => (
                  <p>
                    {award.year} {award.organization} {award.award}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

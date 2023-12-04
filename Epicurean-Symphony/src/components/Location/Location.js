import React from "react";

const Location = (props) => {
  console.log(props);
  const { location, online_presence } =
    props.restaurantDetails === undefined ? {} : props.restaurantDetails;
  console.log();
  return (
    <div className="container">
      <div className="row align-items-end">
        <div className="col-md-6 pe-md-5">
          <h2>Location and Online Presence</h2>
          <div className="header-text">
            <p>{location === undefined ? <></> : location.address}</p>
            <span>
              {online_presence === undefined ? (
                <></>
              ) : online_presence.website === undefined ? (
                <></>
              ) : (
                online_presence.website
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col-md-6 pe-md-5">
          <h2>Social Presence</h2>
          <div className="header-text">
            <span>
              {online_presence.social_media.facebook !== undefined ? (
                online_presence.social_media.facebook
              ) : (
                <></>
              )}
              <br></br>
              {online_presence.social_media.instagram !== undefined ? (
                online_presence.social_media.instagram
              ) : (
                <></>
              )}
              <br></br>
              {online_presence.social_media.twitter !== undefined ? (
                online_presence.social_media.twitter
              ) : (
                <></>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

import React from "react";
import icon1 from "../../images/feature-icon-1.svg";
import icon2 from "../../images/feature-icon-2.svg";
import icon3 from "../../images/feature-icon-3.svg";
import "./Events.scss";
import { useState } from "react";

const Feature = (props) => {
  console.log(props);
  const [events] = useState(props.events === undefined ? {} : props.events);
  console.log(events);
  const [upcoming_events] = useState(
    events.upcoming_events === undefined ? [] : events.upcoming_events
  );
  return (
    <div className="container">
      <div className="row align-items-end">
        <div className="col-md-6 pe-md-5">
          <div className="header-text">
            <span>Upcoming Events</span>
            {upcoming_events === undefined || upcoming_events.length === 0 ? (
              <></>
            ) : (
              upcoming_events.map((event) => (
                <div>
                  <h4>
                    {event.name} {event.date}
                  </h4>
                  <p>{event.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

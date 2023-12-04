import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.scss";

const Footer = (props) => {
  console.log(props);
  const { name, location, ambiance, online_presence } =
    props.restaurantDetails === undefined ? {} : props.restaurantDetails;
  console.log();
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-box">
              <h3 className="logo">
                <span> About {name}</span>
              </h3>
              {undefined !== ambiance &&
              Object.keys(ambiance.description).length > 0 ? (
                <p>{ambiance.description}</p>
              ) : (
                <p>
                  This is a restaurant site. With this you can order the food of
                  your choice online.
                </p>
              )}
              <p>
                {location === undefined ? (
                  <></>
                ) : location.address === undefined ? (
                  <></>
                ) : (
                  location.address
                )}
              </p>
              <p>
                EMAIL -{" "}
                {online_presence === undefined ? (
                  <></>
                ) : online_presence.website === undefined ? (
                  <></>
                ) : (
                  online_presence.website
                )}{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-box">
              <h5>Useful Links</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/menus">
                    Menus
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="footer-box hour-box">
              <h5>OPENING HOURS</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  Mon - Tues : <span>6.00 am - 10.00 pm</span>
                </li>
                <li className="nav-item">
                  Wed - Thurs : <span>6.00 am - 10.00 pm</span>
                </li>
                <li className="nav-item">
                  Launch : <span>Everyday</span>
                </li>
                <li className="nav-item">
                  Sunday : <span className="closed">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>
            {" "}
            &copy; {name === undefined ? <></> : name} all Rights Reserved.
            Designed by Omuk{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

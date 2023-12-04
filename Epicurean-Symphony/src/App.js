import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import MenuPage from "./components/MenuPage/MenuPage";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import Location from "./components/Location/Location";
function App() {
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState([]);
  const [awards, setAwards] = useState([{}]);
  const [sustainabilityInitiatives, setSustainabilityInitiatives] = useState(
    {}
  );
  const [events, setEvents] = useState({});
  const [menus, setMenus] = useState({});

  useEffect(() => {
    fetch("http://localhost:3030/menu")
      .then((res) => res.json())
      .then((data) => setMenus(data))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/restaurant")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/awards")
      .then((res) => res.json())
      .then((data) => setAwards(data))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/sustainability")
      .then((res) => res.json())
      .then((data) => setSustainabilityInitiatives(data))
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3030/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <div className="home-pre-loader">
      <div className="d-flex justify-content-center align-items-center">
        <SyncLoader
          className="syncloader"
          color={"#fe9d3e"}
          loading={loading}
          size={20}
        />
      </div>
    </div>
  ) : (
    <>
      <Router>
        <Header name={about} />
        <Switch>
          <Route exact path="/">
            <Main
              restaurantDetails={about}
              awards={awards}
              sustainabilityInitiatives={sustainabilityInitiatives}
              events={events}
            />
          </Route>
          <Route path="/home">
            <Main
              restaurantDetails={about}
              awards={awards}
              sustainabilityInitiatives={sustainabilityInitiatives}
              events={events}
            />
          </Route>
          <Route path="/about">
            <AboutSection
              restaurantDetails={about}
              awards={awards}
              sustainabilityInitiatives={sustainabilityInitiatives}
            />
          </Route>
          <Route path="/menus">
            <MenuPage menus={menus} />
          </Route>
          <Route path="/contact">
            <Location restaurantDetails={about} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer restaurantDetails={about} />
      </Router>
    </>
  );
}

export default App;

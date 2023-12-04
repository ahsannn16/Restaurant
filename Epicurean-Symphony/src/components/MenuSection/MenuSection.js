import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Menu from "../Menu/Menu";
import "./MenuSection.scss";
import { useState } from "react";
import ContentLoader from "react-content-loader";

const MenuSection = (props) => {
  const history = useHistory();
  const { bgColor, fgColor } = props;
  const [isSeasonal] = useState(props.isSeasonal);
  console.log(props.isSeasonal);
  console.log(props);
  const [items] = useState(props.menu.items);
  console.log(items);
  const [name] = useState(props.menu.name);

  const handleClick = () => {
    history.push("/menus");
  };

  return (
    <div className="menu-section">
      {items !== undefined ? (
        <div className="container">
          <div className="header-text">
            <h1> {name}</h1>
          </div>

          <div className="row">
            {items.slice(0, 6).map((menu) => (
              <Menu
                menu={menu}
                key={menu.name}
                isSeasonal={isSeasonal}
                bgColor="#222222"
                fgColor="#444444"
              ></Menu>
            ))}
          </div>
        </div>
      ) : (
        <ContentLoader
          viewBox="0 0 440 382"
          backgroundColor={bgColor}
          foregroundColor={fgColor}
        >
          <circle cx="227" cy="100" r="100" />
          <rect x="150" y="220" rx="10" ry="10" width="150" height="20" />
          <rect x="100" y="260" rx="10" ry="10" width="250" height="20" />
          <rect x="175" y="300" rx="10" ry="10" width="100" height="20" />
        </ContentLoader>
      )}
    </div>
  );
};

export default MenuSection;

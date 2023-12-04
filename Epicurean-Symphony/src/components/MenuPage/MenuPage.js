import React, { useState } from "react";

import PageBanner from "../PageBanner/PageBanner";
import "./MenuPage.scss";
import MenuSection from "../MenuSection/MenuSection";

const MenuPage = (props) => {
  console.log(props === undefined ? "undefined" : props.menus);
  const [categories] = useState(
    props.menus.categories === undefined ? [] : props.menus.categories
  );
  const [seasonal_menu] = useState(
    props.menus.seasonal_menu === undefined ? {} : props.menus.seasonal_menu
  );

  //   useEffect(() => {
  //     setCategories(JSON.parse(window.sessionStorage.getItem("categories")));
  //   }, []);

  //   useEffect(() => {
  //     window.sessionStorage.setItem("categories", categories);
  //   }, [categories]);

  return (
    <div className="menu-page">
      <PageBanner>
        <span>food menus</span>
      </PageBanner>
      <div className="container" style={{ minHeight: "700px" }}>
        <div className="header-text">
          <span>Fresh From Ehungry</span>
          <h1>OUR SPECIAL MENUS</h1>
        </div>
        <div className="row">
          {categories.slice(0, 6).map((menu) => (
            <MenuSection
              menu={menu}
              key={menu.name}
              isSeasonal={false}
              bgColor="#f1f1f1"
              fgColor="#f9f9f9"
            >
              <span>buy now</span>
            </MenuSection>
          ))}
        </div>
      </div>
      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <MenuSection
            menu={seasonal_menu}
            key={seasonal_menu.name}
            isSeasonal={true}
            bgColor="#f1f1f1"
            fgColor="#f9f9f9"
          >
            <span>buy now</span>
          </MenuSection>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

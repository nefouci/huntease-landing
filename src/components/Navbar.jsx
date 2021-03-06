import React, { useState, useEffect } from "react";
import NavbarPopup from "./small.components/Navbar";
//import { Collapse, NavbarToggler } from "reactstrap";
//import { UncontrolledCollapse } from "reactstrap";
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex fdr">
      <div className="navbar-logo">
        <img
          alt="logo"
          src={require(`../assets/img/${
            size.width > 900 ? "logo-white-retina" : "logo_mobile"
          }.svg`)}
        />
      </div>

      {size.width > 900 && (
        <div className="navbar-items flex fdr jcc ">
          <ul className="flex fdr aic text_s18 white semi_bold_text">
            <li
              onClick={() => {
                let offsetTop = document.getElementById("features_bloc")
                  .offsetTop;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Features
            </li>
            <li
              onClick={() => {
                let offsetTop = document.getElementById("pricing_bloc")
                  .offsetTop;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Pricing
            </li>
            <li
              onClick={() => {
                let offsetTop = document.getElementById("faq_bloc").offsetTop;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              {" "}
              F.A.Q
            </li>
          </ul>
          <div
            className="button-demo flex aic jcc"
            onClick={props.tooglePopup}
            id="toggler1"
          >
            {" "}
            Request a Demo
          </div>
        </div>
      )}
      {size.width <= 900 && (
        <div className="toggle-navbar flex fdc aic jcc" onClick={toggle}>
          {" "}
          <img alt="toglle" src={require("../assets/img/toggle.svg")} />
        </div>
      )}
      {isOpen ? (
        <NavbarPopup tooglePopup={props.tooglePopup} close={toggle} />
      ) : (
        ""
      )}
    </div>
  );
};
function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
export default Navbar;

import React, { useState, useEffect } from "react";
import Services from "./Components/Services";
import PriceList from "./Components/PriceList";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import "./App.css";

export default function App() {
  const mainText = `We're here to \nassist your \nhome `;
  const [showArrow, setShowArrow] = useState(false);
  const [setHam, isSetHam] = useState(false);
  const [isVisibleHam, setIsVisibleHam] = useState(false);
  const [isVisibleClose, setIsVisibleClose] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    ///////////////////////FREEPIKRE HIVATKOZNI///////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      isSetHam(true);
    } else {
      isSetHam(false);
    }
  }, []);

  const togglehamburger = () => {
    if (isVisibleHam) {
      setAnimationClass("slide-out");
      setTimeout(() => {
        setIsVisibleHam(false);
        setIsVisibleClose(true);
        isSetHam(false);
        setAnimationClass("");
      }, 500);
    } else {
      setAnimationClass("slide-in");
        setIsVisibleHam(true);
        isSetHam(true);
        setIsVisibleClose(true);
    }
  };

  const closeHamMenu = () => {
    setIsVisibleHam(false);
    setIsVisibleClose(false);
    isSetHam(true);
  };

  return (
    <div className="App" id="Home">
      {setHam && (
        <img
          className="hamburger-icon"
          src={`${process.env.PUBLIC_URL}/hamburger-menu.png`}
          alt="hamburger menu icon"
          onClick={togglehamburger}
        />
      )}
      {isVisibleClose && (
        <img
          className="close-icon"
          src={`${process.env.PUBLIC_URL}/close-icon.png`}
          alt="close icon"
          onClick={closeHamMenu}
        />
      )}
      {showArrow && (
        <img
          className="top-arrow"
          src={`${process.env.PUBLIC_URL}/top-arrow.png`}
          alt="top arrow"
          onClick={scrollToTop}
        />
      )}
      <header
        className={`App-header ${
          isVisibleHam ? `hamburger-header ${animationClass}` : ""
        }`}
      >
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="#Home">
                <img
                  className="logo"
                  src={`${process.env.PUBLIC_URL}/cleaner-logo.png`}
                  alt="cleaner-logo"
                />
              </a>
            </li>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#PriceList">Price list</a>
            </li>
            <li>
              <a href="#AboutUs">About us</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="first-container">
        <div className="first-container_inside_box">
          <div>
            <h1 className="h1">
              {mainText} <span className="lastWord">cleaner!</span>
            </h1>
            <button className="contact-button">Contact Us!</button>
          </div>
        </div>
        <div className="img-container"></div>
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="PriceList">
        <PriceList />
      </div>
      <div id="AboutUs">
        <AboutUs />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

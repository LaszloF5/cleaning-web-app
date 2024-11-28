import React from "react";
import Services from "./Components/Services";
import PriceList from "./Components/PriceList";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import "./App.css";

export default function App() {
  const mainText = `We're here to \nassist your \nhome `;
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="#Home">Logo place</a>
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
      <div id='Services'>
      <Services/>
      </div>
      <div id='PriceList'>
      <PriceList/>
      </div>
      <div id='AboutUs'>
        <AboutUs/>
      </div>
      <div id='Contact'>
        <Contact/>
      </div>
    </div>
  );
}

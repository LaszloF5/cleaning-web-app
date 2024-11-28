import React from "react";
import Services from "./Components/Services";
import PriceList from "./Components/PriceList";
import "./App.css";

export default function App() {
  const mainText = `We're here to \nassist your \nhome `;
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="#home">Logo place</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#services">Price list</a>
            </li>
            <li>
              <a href="#contact">About us</a>
            </li>
            <li>
              <a href="#services">Contact</a>
            </li>
            {/* <span>Light/Dark toggle</span> */}
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
      <Services/>
      <PriceList/>
    </div>
  );
}

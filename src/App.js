import React from "react";
import "./App.css";

export default function App() {
  const mainText = `We're here to \nassist your \nhome `;
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="#home">Logo helye</a>
            </li>
            <li>
              <a href="#home">Főoldal</a>
            </li>
            <li>
              <a href="#contact">Rólunk</a>
            </li>
            <li>
              <a href="#services">Szolgáltatások</a>
            </li>
            <li>
              <a href="#services">Árlista</a>
            </li>
            <li>
              <a href="#services">Kapcsolat</a>
            </li>
            {/* <span>Light/Dark toggle</span> */}
          </ul>
        </nav>
      </header>
      <div className="first-block">
       <div className="first-block_inside_box">
       <h1 className="h1">
          {mainText} <span className="lastWord">cleaner!</span>
        </h1>
        <button className="contact-button">Get an appointment!</button>
       </div>
      </div>
    </div>
  );
}

import React from "react";
import "../Components/css/Services.css";

export default function Services() {
  const servicesMainText = `Your Trusted \nCleaning `;
  return (
    <div className="kesobbModositaniAStrukturat">
      <div className="second-container">
        <h2 className="second-container_h2">
          {servicesMainText} <span className="services-lastWord">Service!</span>
        </h2>
        <div className="services-container">
          <div className="services-container_items">
            <img src="" alt="img location" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sed accusantium omnis excepturi nihil dolores esse.
            </p>
            <span>service name 1</span>
          </div>
          <div className="services-container_items">
            <img src="" alt="img location" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sed accusantium omnis excepturi nihil dolores esse.
            </p>
            <span>service name 2</span>
          </div>
          <div className="services-container_items">
            <img src="" alt="img location" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sed accusantium omnis excepturi nihil dolores esse.
            </p>
            <span>service name 3</span>
          </div>
          <div className="services-container_items">
            <img src="" alt="img location" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sed accusantium omnis excepturi nihil dolores esse.
            </p>
            <span>service name 4</span>
          </div>
          <div className="services-container_items">
            <img src="" alt="img location" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sed accusantium omnis excepturi nihil dolores esse.
            </p>
            <span>service name 5</span>
          </div>
          <div className="services-container_items">
            <img src="" alt="img place" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sed accusantium omnis excepturi nihil dolores esse.
            </p>
            <span>service name 6</span>
          </div>
        </div>
      </div>
    </div>
  );
}

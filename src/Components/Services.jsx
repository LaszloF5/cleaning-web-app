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
            {/* <img src="" alt="img location" /> */}
            <p>
              Dusting, vacuuming, and mopping. Cleaning bathrooms and kitchens.
              Emptying trash bins.
            </p>
            <span>General Daily/Weekly Cleaning</span>
          </div>
          <div className="services-container_items">
            {/* <img src="" alt="img location" /> */}
            <p>
              Cleaning windows and shutters. Deep cleaning (e.g., grout,
              upholstery). Cleaning hard-to-reach areas (e.g., cabinet tops).
            </p>
            <span>Deep Cleaning</span>
          </div>
          <div className="services-container_items">
            {/* <img src="" alt="img location" /> */}
            <p>
              Deep cleaning upholstered furniture. Shampooing and stain removal
              for carpets.
            </p>
            <span>Upholstery and Carpet Cleaning</span>
          </div>
          <div className="services-container_items">
            {/* <img src="" alt="img location" /> */}
            <p>
              Dusting and disinfecting workstations. Keeping kitchen and
              restroom areas clean. Careful cleaning around documents and
              equipment.
            </p>
            <span>Common Area Cleaning for Residential Buildings</span>
          </div>
          <div className="services-container_items">
            {/* <img src="" alt="img location" /> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sed accusantium omnis excepturi nihil dolores esse.
            </p>
            <span>Office Cleaning for Small Businesses</span>
          </div>
          <div className="services-container_items">
            {/* <img src="" alt="img place" /> */}
            <p>
              Pre- and post-event cleaning. Cleaning before/after moving.
              Post-renovation deep cleaning.
            </p>
            <span>Occasional or One-Time Cleaning</span>
          </div>
        </div>
      </div>
    </div>
  );
}

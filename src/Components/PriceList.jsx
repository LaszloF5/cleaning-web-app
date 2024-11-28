import React from "react";
import "../Components/css/PriceList.css";

export default function PriceList() {
    const otherOptionText = `Do you have special needs? \nContact us with `;
  return (
    <div className="third-container">
      <div className="price-container">
      <h2 className="price-container_h2">Check our price list!</h2>
       <table className="services-table">
          <thead className="services-table_head">
            <tr className="services-table_row">
              <th className="services-table_cell services-table_header">
                Service name
              </th>
              <th className="services-table_cell services-table_header">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="services-table_body">
            <tr className="services-table_row">
              <td className="services-table_cell">Service name 1</td>
              <td className="services-table_cell">x $</td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell">Service name 2</td>
              <td className="services-table_cell">x $</td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell">Service name 3</td>
              <td className="services-table_cell">x $</td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell">Service name 4</td>
              <td className="services-table_cell">x $</td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell">Service name 5</td>
              <td className="services-table_cell">x $</td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell">Service name 6</td>
              <td className="services-table_cell">x $</td>
            </tr>
          </tbody>
        </table>
        <div className="other-option-container">
        <p className="other-option-p">{otherOptionText} <span className="other-option-p_lastword">confidence!</span></p>
        <button className="contact-button">Contact Us!</button>
        </div>
      </div>
    </div>
  );
}

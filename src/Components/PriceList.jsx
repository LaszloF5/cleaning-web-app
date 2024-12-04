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
              <td className="services-table_cell name-cell">
                General Daily/Weekly Cleaning
              </td>
              <td className="services-table_cell">
                <span className="service-price">
                  $50–$100 per session for private homes (depending on size).
                </span>
                <span className="service-price">
                  $100–$200 per session for residential buildings or small
                  offices.
                </span>
              </td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell name-cell">Deep Cleaning</td>
              <td className="services-table_cell service-price-cell">
                <span className="service-price">
                  $150–$300 for private homes (size-dependent).
                </span>
                <span className="service-price">
                  $300–$500 for residential buildings or small offices.
                </span>
              </td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell name-cell">
                Upholstery and Carpet Cleaning
              </td>
              <td className="services-table_cell">
                <span className="service-price service-price-cell">
                  $50–$100 per piece of furniture (e.g., sofa, armchair).
                </span>
                <span className="service-price">
                  $100–$200 for carpet cleaning per room.
                </span>
              </td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell name-cell">
                Common Area Cleaning for Residential Buildings
              </td>
              <td className="services-table_cell service-price-cell">
                <span className="service-price">
                  $100–$200 per session (depending on the number of floors and
                  areas).
                </span>
                <span className="service-price">
                  Monthly contracts: $400–$800.
                </span>
              </td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell name-cell">
                Office Cleaning for Small Businesses
              </td>
              <td className="services-table_cell">
                <span className="service-price service-price-cell">
                  $50–$100 per session (small office with 5–10 employees).
                </span>
                <span className="service-price">
                  Monthly contracts: $400–$600 for 2–3 cleanings per week.
                </span>
              </td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell name-cell">
                Occasional or One-Time Cleaning
              </td>
              <td className="services-table_cell service-price-cell">
                <span className="service-price">
                  Pre-/Post-Event Cleaning: $150–$300.
                </span>
                <span className="service-price">
                  Move-In/Move-Out Cleaning: $200–$400.
                </span>
                <span className="service-price">
                  Post-Renovation Cleaning: $300–$600.
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot className="table-addition">
            <tr>
              <td colSpan={2} className="tfoot">
              These prices are guidelines. An exact quote depends on the specific
            details of the service required and may require further
            consultation.
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="other-option-container">
          <p className="other-option-p">
            {otherOptionText}{" "}
            <span className="other-option-p_lastword">confidence!</span>
          </p>
          <button className="contact-button">Contact Us!</button>
        </div>
      </div>
    </div>
  );
}

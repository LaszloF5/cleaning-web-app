import React, { useEffect, useState } from "react";
import "../Components/css/PriceList.css";

export default function PriceList() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      name: "Társasház takarítás",
      details: [
        "Nagyobb társasházak esetén: 1500ft/lakás/alkalom",
        "Kisebb társasházak esetén: egyedi árajánlat, melynek alapja 9000 Ft/óra bruttó díj.",
      ],
    },
    {
      name: "Iroda takarítás",
      details: [
        "Ár: Bruttó 10.000 Ft/óra/fő. A pontos díj meghatározásához minden esetben helyszíni felmérés szükséges, hogy a szolgáltatást a legjobb minőségben és költséghatékonyan biztosíthassuk.",
      ],
      categories: [
        {
          title: "Általános munkafelületek:",
          items: [
            "Szemetesek kiürítése",
            "Járófelületek tisztán tartása",
            "Bútorok és asztalok portalanítása",
            "Ajtók üvegfelületeinek takarítása",
            "Kilincsek, ajtók tisztítása",
            "Lábtörlők karbantartása",
          ],
        },
        {
          title: "Illemhelyiségek:",
          items: [
            "Csapok, mosdók, szappanadagolók fertőtlenítése",
            "Tükrök tisztítása",
            "Ajtók és kilincsek alapos takarítása",
            "Felsöprés, porszívózás, felmosás",
          ],
        },
        {
          title: "Étkezőhelyiség:",
          items: [
            "Étkezőasztalok és székek tisztán tartása",
            "Konyhapult és mosogató takarítása",
            "Bútorok, fiókok áttörlése",
          ],
        },
      ],
    },
  ];

  return (
    <div className="third-container">
      {isMobileView ? (<div className="service-list-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2 className="service-title">{service.name}</h2>
            {service.details.map((detail, i) => (
              <p key={i} className="service-detail">
                {detail}
              </p>
            ))}
            {service.categories && (
              <div className="service-categories">
                {service.categories.map((category, j) => (
                  <div key={j} className="service-category">
                    <h4>{category.title}</h4>
                    <ul className="service-category_ul">
                      {category.items.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <p className="service-footer">
          Munkánkra teljes körű garanciát vállalunk. Probléma esetén a
          bejelentéstől számított 24-48 órán belül reagálunk.
        </p>
      </div>)
      :
      (<div className="price-container">
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
                Társasház takarítás
              </td>
              <td className="services-table_cell">
                <div className="condominium-price-container">
                  <span className="service-price">
                    Nagyobb társasházak esetén: 1500ft/lakás/alkalom
                  </span>
                  <span className="service-price">
                    Kisebb társasházak esetén: egyedi árajánlat, melynek alapja
                    9000 Ft/óra bruttó díj.
                  </span>
                </div>
              </td>
            </tr>
            <tr className="services-table_row">
              <td className="services-table_cell name-cell">Iroda takarítás</td>
              <td className="services-table_cell">
                <span className="service-price">
                  Ár: Bruttó 10.000 Ft/óra/fő A pontos díj meghatározásához
                  minden esetben helyszíni felmérés szükséges, hogy a
                  szolgáltatást a legjobb minőségben és költséghatékonyan
                  biztosíthassuk.
                </span>
                <div className="flex">
                  <span className="service-price">
                    <h3 className="service-price_h3">
                      Általános munkafelületek:
                    </h3>
                    <ul>
                      <li>Szemetesek kiürítése</li>
                      <li>Járófelületek tisztán tartása</li>
                      <li>Bútorok és asztalok portalanítása</li>
                      <li>Ajtók üvegfelületeinek takarítása</li>
                      <li>Kilincsek, ajtók tisztítása</li>
                      <li>Lábtörlők karbantartása</li>
                    </ul>
                  </span>
                  <span className="service-price">
                    <h3 className="service-price_h3">Illemhelyiségek:</h3>
                    <ul>
                      <li>Csapok, mosdók, szappanadagolók fertőtlenítése</li>
                      <li>Tükrök tisztítása</li>
                      <li>Ajtók és kilincsek alapos takarítása</li>
                      <li>Felsöprés, porszívózás, felmosás</li>
                    </ul>
                  </span>
                  <span className="service-price">
                    <h3 className="service-price_h3">Étkezőhelyiség:</h3>
                    <ul>
                      <li>Étkezőasztalok és székek tisztán tartása</li>
                      <li>Konyhapult és mosogató takarítása</li>
                      <li>Bútorok, fiókok áttörlése</li>
                    </ul>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot className="table-addition">
            <tr>
              <td colSpan={2} className="tfoot">
                Munkánkra teljes körű garanciát vállalunk. Probléma esetén a
                bejelentéstől számított 24-48 órán belül reagálunk.
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="other-option-container">
          <p className="other-option-p">
            Egyedi igények esetén, a szolgáltatások bővítése plusz költségekkel
            járhat, melyeket a felmérés során egyeztetünk.
          </p>
          <button className="contact-button">Contact Us!</button>
        </div>
      </div>)}
    </div>
  );
}

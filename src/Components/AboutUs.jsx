import React from "react";
import "../Components/css/AboutUs.css";

export default function AboutUs() {
  // const [imgs, setImgs] = useState([]);

  // const getImgs = async () => {
  //   setImgs([]);
  //   const fetchUrl = "https://randomuser.me/api/?results=3&nat=DE";
  //   try{
  //     const response = await fetch(fetchUrl);
  //     const data = await response.json();
  //     const {results} = data;
  //     const newImgs = results.map((person) => ({
  //       img: person.picture.large,
  //       name: `${person.name.first} ${person.name.last}`
  //     }))
  //     setImgs(newImgs);
  //   } catch (error){
  //     console.error("Error fetching data", error);
  //   }
  // }

  return (
    <div className="fourth-container">
      <div className="about-us-container">
        <h2 className="about-us-mainText">
          About <span className="about-us-mainText-lastword ">Us</span>
        </h2>
        <div className="us">
          <p className="us_p">
          Üdvözöljük! Cégünk professzionális társasház takarítási szolgáltatásokat nyújt Győrben és környékén. Célunk, hogy tiszta és rendezett környezetet teremtsünk, ahol a lakók otthon érezhetik magukat. Szolgáltatásaink magukban foglalják a heti rendszerességű takarítást, amely tartalmazza a felmosást, söprést, portalanítást, pókhálótlanítást és havi rendszerességgel az ablakok tisztítását.
          </p>
        </div>
        <div className="theySaid-container">
          <h3 className="theySaid-container_h3">They said about us</h3>
          <div className="theySaid-users-container">
            <div className="theySaid-users">
              <img
                src={`${process.env.PUBLIC_URL}/person1.jpg`}
                alt="Oliver Bennett"
                className="theySaid-users_img"
              />
              <p>Oliver Bennett</p>
              <p className="theySaid-users_feedback">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                soluta eligendi quis officiis. Assumenda commodi aut qui quis
                error nesciunt.
              </p>
            </div>
            <div className="theySaid-users">
              <img
                src={`${process.env.PUBLIC_URL}/person2.jpg`}
                alt="Henry Caldwell"
                className="theySaid-users_img"
              />
              <p>Henry Caldwell</p>
              <p className="theySaid-users_feedback">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                soluta eligendi quis officiis. Assumenda commodi aut qui quis
                error nesciunt.
              </p>
            </div>
            <div className="theySaid-users">
              <img
                src={`${process.env.PUBLIC_URL}/person3.jpg`}
                alt="James Harrington"
                className="theySaid-users_img"
              />
              <p>James Harrington</p>
              <p className="theySaid-users_feedback">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                soluta eligendi quis officiis. Assumenda commodi aut qui quis
                error nesciunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

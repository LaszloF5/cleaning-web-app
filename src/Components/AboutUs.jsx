import React from "react";
import "../Components/css/AboutUs.css";

export default function AboutUs() {
  const [imgs, setImgs] = React.useState([]);
  
  const getImgs = async () => {
    setImgs([]);
    const fetchUrl = "https://randomuser.me/api/?results=3&nat=DE";
    try {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      const { results } = data;
      const newImgs = results.map((person) => ({
        img: person.picture.large,
        name: `${person.name.first} ${person.name.last}`
      }));
      setImgs(newImgs);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="fourth-container">
      <div className="about-us-container">
        <h2 className="about-us-mainText">
          About <span className="about-us-mainText-lastword ">Us</span>
        </h2>
        <div className="us">
          <img className="us_img" src="" alt="Us" />
          <p className="us_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            semper erat, non gravida nisi. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Nullam id
            enim et arcu viverra consectetur. Duis in nulla vel massa consequat
            facilisis ac auctor purus. Nulla facilisi. Duis ut rutrum nunc.
            Nulla facilisi. Donec vel mi at neque consectetur congue.
          </p>
        </div>
        <button onClick={getImgs}>Képek lekérése</button>
        <div className="theySaid-container">
          <h3 className="theySaid-container_h3">They said about us</h3>
          <div className="theySaid-users-container">
            {imgs.map((item, index) => (
              <div className="theySaid-users">
                <img className="theySaid-users_img" key={index} src={item.img} alt={`User ${index}`} />
                <p>{item.name}</p>
                <p className="theySaid-users_feedback">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat soluta eligendi quis officiis. Assumenda commodi aut
                  qui quis error nesciunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

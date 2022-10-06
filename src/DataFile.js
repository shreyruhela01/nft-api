import "./DataFile.css";
import React, { useEffect, useState } from "react";
const Datafile = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://api.opensea.io/api/v1/assets?format=json")
      .then((response) => response.json())
      .then((data) => setUser(data.assets));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);

  const buttonClicked = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <div className="container">
        {user.map((ele) => (
          <div className="child">
            <div className="child-content p-child">
              <img src={ele.image_thumbnail_url} alt="NFT"></img>
            </div>
            <div className="child-content p-child">
              <label>Name</label>
              <div>
                {ele.name}
                <div />
              </div>
            </div>
            <div className="child-content p-child">
              <label>Address</label>
              <div>{ele.id}</div>
            </div>
            <div className="child-btn p-child">
              <button className="btn" onClick={buttonClicked}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Datafile;

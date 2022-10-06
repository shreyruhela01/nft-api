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
      {user.map((ele) => (
        <div className="container">
          <div>
            <div>
              <img src={ele.image_thumbnail_url} alt="NFT"></img>
            </div>
            <div>
              <label>Name</label>
              {ele.name}
            </div>
            <div>Address</div>
            <div>
              <button onClick={buttonClicked}> Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Datafile;

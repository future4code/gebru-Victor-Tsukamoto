import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToListTripsPage } from "../routes/coordinator";


const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h3>HomePage</h3>
      <div>
        <img src="https://loremflickr.com/320/240?lock=7" />
      </div>

      <button onClick={()=>goToAdminHomePage(navigate)}>Admin</button>
      <button onClick={()=>goToListTripsPage(navigate)}>Trips</button>

    </div>
  );
};

export default HomePage;

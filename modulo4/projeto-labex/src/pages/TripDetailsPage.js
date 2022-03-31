import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";


const TripDetailsPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h3>HomePage</h3>
      <div>
        <img src="https://loremflickr.com/320/240?lock=7" />
      </div>

      <button onClick={()=>goBack(navigate)}>Voltar</button>

    </div>
  );
};

export default TripDetailsPage;

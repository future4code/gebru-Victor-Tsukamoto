import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../routes/coordinator";


const ListTripsPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h3>ListTripsPage</h3>
      <div>
        <img src="https://loremflickr.com/320/240?lock=7" />
      </div>

      <button onClick={()=>goToApplicationFormPage(navigate)}>Ir para formulario</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>

    </div>
  );
};

export default ListTripsPage;

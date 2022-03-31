import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";


const AdminHomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h3>AdminHomePage</h3>
      <div>
        <img src="https://loremflickr.com/320/240?lock=7" />
      </div>

      <button onClick={()=>goBack(navigate)}>Voltar</button>

    </div>
  );
};

export default AdminHomePage;

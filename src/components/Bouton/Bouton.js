import React, { useContext } from "react";
import "./Bouton.css"
import { BoutiqueContext } from "../../BoutiqueContext";



const Bouton = (props) => {
  const boutiqueContext = useContext(BoutiqueContext)
  function handleClick() {
    boutiqueContext.decrementeQte(props.id)
  }
  let isActive = boutiqueContext.articles[props.id].qte === 0 ? true : false
  return (
    <button className="custom-button" onClick={() => (handleClick())}
    disabled = {isActive}
    >
      {props.label}
    </button>
  );
};

export default Bouton;




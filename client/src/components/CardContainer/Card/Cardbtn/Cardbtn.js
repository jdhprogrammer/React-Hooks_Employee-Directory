import React from "react";
import "./Cardbtn.css";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default CardBtn;

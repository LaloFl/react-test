import React from "react";
import "./styles.css";
function Button(props) {
  return (
    <>
      <button onClick={props.onClick} className="button">
        {props.text}
      </button>
    </>
  );
}

export default Button;

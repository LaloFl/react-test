import React from "react";
import "./styles.css";
function Button(props) {
  return (
    <>
      <button className="button">{props.text}</button>
      <button className="button">{props.text}</button>
    </>
  );
}

export default Button;

import React from "react";
import "./styles.css";
export default function Button(props) {
  return (
    <>
      <button onClick={props.onClick} className={props.className}>
        {props.text}
      </button>
    </>
  );
}





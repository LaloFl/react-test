import "./styles.sass";
import { useReducer } from "react";
import Button from "components/Button";
import { actions } from "./reducer/actions";
import { initialState } from "./reducer/constants";
import { reducer } from "./reducer";


import React from 'react';

export function PruebaPrueba() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <div></div>;
}


export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="home__page">
      <h1>Home Page</h1>
      <h2>Contador en: {state.counter}</h2>
      <Button
        text={"Agregar"}
        onClick={() => dispatch({ type: actions.ADD_COUNTER })}
      />
      <Button  
        
        text={"Restarr"}
        onClick={() => dispatch({ type: actions.REST_COUNTER })}
      />

      <Button 
      className = {"boton2"}
      text = {"Suma 2"} 
      onClick={function(){dispatch ({type:actions.ADD_2_COUNTER})}}
      ></Button>
    </div>
  );
}

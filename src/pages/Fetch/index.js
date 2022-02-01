import React, { useReducer, useEffect } from "react";
import { reducer, initialState, actions } from "./reducer";
import { callBackend } from "api";
export default function Fetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    let callBackendBody = {
      url: "https://app-cines.herokuapp.com/api/movie/get",
      method: "GET",
      body: {},
      constants: {
        REQUEST: actions.GET_MOVIES_REQUEST,
        SUCCESS: actions.GET_MOVIES_SUCCESS,
        FAILURE: actions.GET_MOVIES_FAILURE,
      },
      dispatch: dispatch,
      isFile: false,
    };
    callBackend(callBackendBody);
  }, []);
  return (
    <div>
      <h1>Hola</h1>
      {state.getMovies.error && <span>{state.getMovies.error}</span>}
      {state.getMovies.loading && <h2>Cargando...</h2>}
      {state.getMovies.data.map((item, key) => (
        <div key={key}>
          <span>{item.title}</span>
          <img src={item.imgUrl} height="80" alt={item.title} />
        </div>
      ))}
    </div>
  );
}

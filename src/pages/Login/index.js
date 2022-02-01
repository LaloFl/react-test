import React, { useReducer } from "react";
import Button from "components/Button";
import "./styles.sass";
import { actions } from "./reducer/actions";
import { initialState } from "./reducer/constants";
import { reducer } from "./reducer";

export default function LoginScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchLogin = async () => {
    const responseLogin = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      body: JSON.stringify({
        username: state.formData.username,
        password: state.formData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await responseLogin.json();
    console.log(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: actions.UPDATE_FORM,
      payload: {
        name,
        value,
      },
    });
  };
  return (
    <div className="login__screen">
      <h1>Login</h1>
      <form>
        <label for="username">Nombre de usuario</label>
        <input
          type="text"
          name="username"
          value={state.formData.username}
          onChange={handleChange}
        />
        <label for="password">Contraseña</label>
        <input
          type="password"
          name="password"
          value={state.formData.password}
          onChange={handleChange}
        />
        <Button
          text="Login"
          onClick={(event) => {
            event.preventDefault();
            fetchLogin();
          }}
        />
      </form>
    </div>
  );
}

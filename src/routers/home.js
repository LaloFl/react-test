import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "routes/home";

export const HomeRouter = () => {
  return (
    <div>
      <React.Suspense
        fallback={
          <>
            <h1>Cargando...</h1>
          </>
        }
      >
        <Switch>
          {routes.map((route, index) => (
            <Route
              index={index}
              path={route.path}
              exact={route.exact}
              render={(props) => <route.component />}
            />
          ))}
        </Switch>
      </React.Suspense>
    </div>
  );
};

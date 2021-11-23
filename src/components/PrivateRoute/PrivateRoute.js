import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ auth, ...rest }) => {
  return auth ? (
    <Route {...rest} />
  ) : (
    <Redirect to={{ pathname: "/sign-in" }} />
  );
};

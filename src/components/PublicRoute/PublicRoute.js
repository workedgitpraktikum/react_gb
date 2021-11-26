import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ auth, ...rest }) => {
  return !auth ? <Route {...rest} /> : <Redirect to="/chats" />;
};

export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const AUTH_TRIGGER = "AUTH_TRIGGER";

export const signInUser = (user) => ({
  type: SIGN_IN_USER,
  payload: user,
});

export const signOutUser = () => ({
  type: SIGN_OUT_USER,
});

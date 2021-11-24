export const BOT = {
  name: "bot",
  message: "Привет! 👋 Задай мне вопрос, и я постараюсь тебе помочь.",
};

export const USER = "Vlad";

export const FETCH_URL = "https://thatcopy.pw/catapi/rest/";

export const signUp = {
  TEXT: "Sign up",
  LINK: "/sign-in",
  LINK_TEXT: "Already have an account? Sign In",
};

export const signIn = {
  TEXT: "Sign in",
  LINK: "/sign-up",
  LINK_TEXT: "Don't have an account? Sign Up",
};

export const authErrorCodes = {
  EMAIL_EXISTS: "The email address is already in use by another account.",
  INVALID_EMAIL: "The email address is badly formatted.",
  EMAIL_NOT_FOUND:
    "There is no user record corresponding to this identifier. The user may have been deleted.",
  WEAK_PASSWORD: "Password should be at least 6 characters",
  INVALID_PASSWORD:
    "The password is invalid or the user does not have a password.",
};

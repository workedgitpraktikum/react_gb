import { SIGN_IN_USER, SIGN_OUT_USER } from "./actions";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_USER: {
      return {
        user: action.payload,
      };
    }
    case SIGN_OUT_USER: {
      return {
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};

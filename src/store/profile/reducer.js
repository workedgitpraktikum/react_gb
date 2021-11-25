import { INIT_USER_INFO, SET_USERNAME, SHOW_USERNAME } from "./actions";

const initialState = {
  isShowUsername: true,
  username: null,
  email: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USERNAME: {
      return {
        ...state,
        isShowUsername: action.payload,
      };
    }
    case SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    case INIT_USER_INFO: {
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      };
    }
    default: {
      return state;
    }
  }
};

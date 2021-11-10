import { SHOW_USERNAME } from "./actions";

const initialState = {
  isShowUsername: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USERNAME: {
      return {
        ...state,
        isShowUsername: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

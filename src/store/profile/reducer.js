import { SHOW_USERNAME } from "./actions";

const initialState = {
  showUsername: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USERNAME: {
      return {
        ...state,
        showUsername: !state.showUsername,
      };
    }
    default: {
      return state;
    }
  }
};

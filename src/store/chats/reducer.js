import { CHANGE_CHATS } from "./actions";

const initialState = {
  chatList: {},
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHATS: {
      return {
        chatList: { ...action.payload.chats },
      };
    }
    default: {
      return state;
    }
  }
};

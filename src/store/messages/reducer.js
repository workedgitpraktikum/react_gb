import { CHANGE_MESSAGES } from "./actions";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGES: {
      const { chatID, messages } = action.payload;
      const newMessages = { ...state.messageList };
      newMessages[chatID] = [...messages];
      return {
        messageList: newMessages,
      };
    }
    default: {
      return state;
    }
  }
};

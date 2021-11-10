import { DELETE_CHAT_MESSAGES, MESSAGE_ADD } from "./actions";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_ADD: {
      const { id, message } = action.payload;
      const newMessages = { ...state.messageList };
      newMessages[id] = [...(newMessages[id] || []), message];

      return {
        messageList: newMessages,
      };
    }
    case DELETE_CHAT_MESSAGES: {
      if (!state.messageList.hasOwnProperty(action.payload)) {
        return state;
      }
      const newMessages = { ...state.messageList };
      delete newMessages[action.payload];

      return {
        messageList: newMessages,
      };
    }
    default: {
      return state;
    }
  }
};

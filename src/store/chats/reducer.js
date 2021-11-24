import { CHAT_ADD, CHAT_DELETE } from "./actions";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_ADD: {
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      };
    }
    case CHAT_DELETE: {
      const newChatList = [
        ...state.chatList.filter((chatItem) => chatItem.id !== action.payload),
      ];
      return {
        ...state,
        chatList: newChatList,
      };
    }
    default: {
      return state;
    }
  }
};

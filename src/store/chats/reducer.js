import { CHAT_LIST } from "../../const";
import { CHAT_ADD, CHAT_DELETE } from "./actions";

const initialState = {
  chatList: CHAT_LIST,
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
      const index = state.chatList.findIndex(
        (chatItem) => chatItem.id === action.payload
      );
      return {
        ...state,
        chatList: [
          ...state.chatList.slice(0, index),
          ...state.chatList.slice(index + 1),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
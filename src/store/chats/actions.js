export const CHAT_ADD = "CHAT_ADD";
export const CHAT_DELETE = "CHAT_DELETE";
export const CHANGE_CHATS = "CHANGE_CHATS";

export const chatAdd = (newChat) => ({
  type: CHAT_ADD,
  payload: {
    newChat: newChat,
  },
});

export const chatDelete = (chatID) => ({
  type: CHAT_DELETE,
  payload: {
    chatID: chatID,
  },
});

export const changeChats = (chats) => ({
  type: CHANGE_CHATS,
  payload: {
    chats: chats,
  },
});

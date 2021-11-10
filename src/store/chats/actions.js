export const CHAT_ADD = "CHAT_ADD";
export const CHAT_DELETE = "CHAT_DELETE";

export const chatAdd = (newChat) => ({
  type: CHAT_ADD,
  payload: newChat,
});

export const chatDelete = (chatID) => ({
  type: CHAT_DELETE,
  payload: chatID,
});

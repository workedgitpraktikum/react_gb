export const MESSAGE_ADD = "MESSAGE_ADD";
export const DELETE_CHAT_MESSAGES = "DELETE_CHAT_MESSAGES";

export const messageAdd = (chatID, newMessage) => ({
  type: MESSAGE_ADD,
  payload: {
    id: chatID,
    message: newMessage,
  },
});

export const deleteChatMessages = (chatID) => ({
  type: DELETE_CHAT_MESSAGES,
  payload: chatID,
});

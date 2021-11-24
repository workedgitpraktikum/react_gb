export const MESSAGE_ADD = "MESSAGE_ADD";
export const CHANGE_MESSAGES = "CHANGE_MESSAGES";
export const DELETE_CHAT_MESSAGES = "DELETE_CHAT_MESSAGES";
/* export const TRACK_MESSAGES = "TRACK_MESSAGES"; */

export const messageAdd = (chatID, message) => ({
  type: MESSAGE_ADD,
  payload: {
    chatID: chatID,
    message: message,
  },
});

export const changeMessages = (chatID, messages) => ({
  type: CHANGE_MESSAGES,
  payload: {
    chatID: chatID,
    messages: messages,
  },
});

export const deleteChatMessages = (chatID) => ({
  type: DELETE_CHAT_MESSAGES,
  payload: chatID,
});

/* export const trackMessages = () => ({
  type: TRACK_MESSAGES,
}); */

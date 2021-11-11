import { BOT } from "../../const";

export const MESSAGE_ADD = "MESSAGE_ADD";
export const DELETE_CHAT_MESSAGES = "DELETE_CHAT_MESSAGES";

export const messageAdd = (chatID, newMessage) => ({
  type: MESSAGE_ADD,
  payload: {
    id: chatID,
    message: newMessage,
  },
});

//action creator with redux-thunk
export const messageAddWithBotResponse = (chatID, newMessage) => (dispatch) => {
  dispatch(messageAdd(chatID, newMessage));

  if (newMessage.user !== BOT.name) {
    setTimeout(() => {
      dispatch(
        messageAdd(chatID, {
          id: Date.now(),
          user: BOT.name,
          text: BOT.message,
        })
      );
    }, 1500);
  }
};

export const deleteChatMessages = (chatID) => ({
  type: DELETE_CHAT_MESSAGES,
  payload: chatID,
});

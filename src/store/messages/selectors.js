export const getMessagesStore = (state) => state.messages || {};
export const getMessageList = (id) => (state) =>
  getMessagesStore(state).messageList[id] || [];

export const getChatList = (state) => state.chats.chatList;
export const getIsChatExist = (id) => (state) =>
  getChatList(state).findIndex((chat) => chat.id === id);

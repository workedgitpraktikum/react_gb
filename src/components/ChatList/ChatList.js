import { List } from "@material-ui/core";
import ChatItem from "../ChatItem/ChatItem.js";
import { useSelector } from "react-redux";
import { getChatList } from "../../store/chats/selectors.js";

const ChatList = () => {
  const chatList = useSelector(getChatList);

  return (
    <List>
      {chatList.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </List>
  );
};

export default ChatList;

import { List } from "@material-ui/core";
import ChatItem from "../ChatItem/ChatItem.js";
import PropTypes from "prop-types";

const ChatList = ({ chatList, handleChatItemDelete }) => {
  return (
    <List>
      {chatList.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          handleChatItemDelete={handleChatItemDelete}
        />
      ))}
    </List>
  );
};

export default ChatList;

ChatList.propTypes = {
  chatList: PropTypes.array,
  handleChatItemDelete: PropTypes.func,
};

import { List } from "@material-ui/core";
import ChatItem from "../ChatItem/ChatItem.js";
import PropTypes from "prop-types";

const ChatList = ({ chatList, handleChatItemDelete }) => {
  return (
    <List>
      {Object.entries(chatList).map(([key, value]) => (
        <ChatItem
          key={key}
          chat={value}
          id={key}
          handleChatItemDelete={handleChatItemDelete}
        />
      ))}
    </List>
  );
};

export default ChatList;

ChatList.propTypes = {
  chatList: PropTypes.shape(),
  handleChatItemDelete: PropTypes.func,
};

import { List } from "@material-ui/core";
import ChatItem from "../ChatItem/ChatItem.js";
import PropTypes from "prop-types";

const ChatList = ({ chatList, handleChatDelete }) => {
  return (
    <List>
      {chatList.map(({ id, name, image }) => {
        return (
          <ChatItem
            key={id}
            id={id}
            name={name}
            image={image}
            handleChatDelete={handleChatDelete}
          />
        );
      })}
    </List>
  );
};

export default ChatList;

ChatList.propTypes = {
  chatList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  handleChatDelete: PropTypes.func,
};

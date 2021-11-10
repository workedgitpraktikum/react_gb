import MessageItem from "../MessageItem/MessageItem";
import PropTypes from "prop-types";

const MessageList = ({ messageList }) => {
  return (
    <>
      {messageList.map((message) => {
        return <MessageItem key={message.id} message={message} />;
      })}
    </>
  );
};

export default MessageList;

MessageList.propTypes = {
  messageList: PropTypes.array,
};

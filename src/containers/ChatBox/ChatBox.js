import CustomInput from "../../components/CustomInput/CustomInput.js";
import PropTypes from "prop-types";
import { Add } from "@material-ui/icons";
import ChatList from "../../components/ChatList/ChatList.js";

const ChatBox = ({ chatList, handleChatAdd, handleChatDelete }) => {
  return (
    <>
      <CustomInput
        placeholder="Название нового чата"
        icon={<Add />}
        handleButtonClick={handleChatAdd}
      />
      <ChatList chatList={chatList} handleChatDelete={handleChatDelete} />
    </>
  );
};

export default ChatBox;

ChatBox.propTypes = {
  chatList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  handleChatAdd: PropTypes.func,
  handleChatDelete: PropTypes.func,
};

import CustomInput from "../../components/CustomInput/CustomInput.js";
import { Add } from "@material-ui/icons";
import ChatList from "../../components/ChatList/ChatList.js";

const ChatBox = () => {
  return (
    <>
      <CustomInput placeholder="Название нового чата" icon={<Add />} />
      <ChatList />
    </>
  );
};

export default ChatBox;

import { useSelector, useDispatch } from "react-redux";
import { Add } from "@material-ui/icons";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import ChatList from "../../components/ChatList/ChatList.js";
import { getChatList } from "../../store/chats/selectors.js";
import { chatAdd, chatDelete } from "../../store/chats/actions";
import { deleteChatMessages } from "../../store/messages/actions.js";

const ChatBox = () => {
  const chatList = useSelector(getChatList);
  const dispatch = useDispatch();

  //обработчик функции добавления чата
  const onChatAdd = (value) => {
    dispatch(
      chatAdd({
        id: `chat_${Date.now()}`,
        name: value,
        image: `https://picsum.photos/id/11/45`,
      })
    );
  };

  //обработчик функции удаления чата и его сообщений
  const onChatDelete = (chatID) => {
    dispatch(chatDelete(chatID));
    dispatch(deleteChatMessages(chatID));
  };

  return (
    <>
      <CustomInput
        placeholder="Название нового чата"
        icon={<Add />}
        handleButtonClick={onChatAdd}
      />
      <ChatList chatList={chatList} handleChatItemDelete={onChatDelete} />
    </>
  );
};

export default ChatBox;

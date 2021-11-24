import { useSelector, useDispatch } from "react-redux";
import { Add } from "@material-ui/icons";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import ChatList from "../../components/ChatList/ChatList.js";
import { getChatList } from "../../store/chats/selectors.js";
import { changeChats, chatAdd, chatDelete } from "../../store/chats/actions";
import { deleteChatMessages } from "../../store/messages/actions.js";
import { useEffect } from "react";
import { chatsRef } from "../../services/firebase.js";

const ChatBox = () => {
  const chatList = useSelector(getChatList);
  const dispatch = useDispatch();

  //обработчик функции добавления чата
  const onChatAdd = (value) => {
    dispatch(
      chatAdd({
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
  useEffect(() => {
    //подписка на изменения
    chatsRef.on("value", (snapshot) => {
      let chats = {};
      snapshot.forEach((snap, i) => {
        chats[snap.key] = snap.val();
      });
      dispatch(changeChats(chats));
    });
    return () => {
      chatsRef.off("value");
    };
  }, [dispatch]);
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

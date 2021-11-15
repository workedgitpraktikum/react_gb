import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { Grid } from "@material-ui/core";
import NewMessage from "../../components/NewMessage/NewMessage";
import MessageList from "../../components/MessageList/MessageList";
import { getMessageList } from "../../store/messages/selectors";
import { messageAdd } from "../../store/messages/actions.js";
import { getIsChatExist } from "../../store/chats/selectors";
import { USER } from "../../const";

const MessageBox = () => {
  const { chatID } = useParams();
  const messageList = useSelector(getMessageList(chatID));
  const isChatExist = useSelector(getIsChatExist(chatID));
  const dispatch = useDispatch();

  //обработчик функции добавления сообщения
  const onMessageAdd = (messageText) => {
    addNewMessage(USER, messageText);
  };

  //функция добавления нового сообщения с ответом бота
  const addNewMessage = useCallback(
    (user, text) => {
      dispatch(
        messageAdd(chatID, {
          id: Date.now(),
          user: user,
          text: text,
        })
      );
    },
    [chatID, dispatch]
  );

  //возврат на страницу чатов, если чата по ID не существует
  if (isChatExist === -1) {
    return <Redirect to="/chats/" />;
  }

  return (
    <Grid container direction="column-reverse">
      <MessageList messageList={messageList} />
      <NewMessage handleMessageAdd={onMessageAdd} />
    </Grid>
  );
};

export default MessageBox;

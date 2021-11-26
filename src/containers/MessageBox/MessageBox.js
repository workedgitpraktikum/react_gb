import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { Grid } from "@material-ui/core";
import NewMessage from "../../components/NewMessage/NewMessage";
import MessageList from "../../components/MessageList/MessageList";
import { getMessageList } from "../../store/messages/selectors";
import { changeMessages, messageAdd } from "../../store/messages/actions.js";
import { getIsChatExist } from "../../store/chats/selectors";
import { messagesRef } from "../../services/firebase";
import { getUsername } from "../../store/profile/selectors";

const MessageBox = () => {
  const { chatID } = useParams();
  const messageList = useSelector(getMessageList(chatID));
  const isChatExist = useSelector(getIsChatExist(chatID));
  const username = useSelector(getUsername);

  const dispatch = useDispatch();

  //обработчик функции добавления сообщения
  const onMessageAdd = (messageText) => {
    addNewMessage({
      id: Date.now(),
      user: username,
      text: messageText,
    });
  };

  //функция добавления нового сообщения с ответом бота
  const addNewMessage = useCallback(
    (message) => {
      dispatch(messageAdd(chatID, message));
    },
    [chatID, dispatch]
  );
  useEffect(() => {
    //подписка на изменения
    messagesRef.child(chatID).on("value", (snapshot) => {
      const messages = [];
      snapshot.forEach((snap) => {
        messages.push(snap.val());
      });
      dispatch(changeMessages(chatID, messages));

      return () => {
        messagesRef.off("value");
      };
    });
  }, [dispatch, chatID]);

  //возврат на страницу чатов, если чата по ID не существует
  if (!isChatExist) {
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

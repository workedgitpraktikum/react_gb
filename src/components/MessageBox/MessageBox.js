import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Message from '../Message/Message';
import NewMessage from '../NewMessage/NewMessage';
import { BOT, USER } from '../../const';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router';
 
const MessageBox = ({ chatList }) => {
  const { chatID } = useParams();
  const chatItem = chatList.find(chatItem => chatItem.id === chatID);

  const [messageList, setMessageList] = useState([]);

  //функция добавления нового сообщения
  const addNewMessage = (author, text) => {
    setMessageList(messageList => [...messageList, {
      id: author + Date.now(),
      author: author,
      text: text
    }])
  }

  //обработчик нажатия кнопки отправки сообщения
  const handleButtonClick = (messageText) => {
    addNewMessage(USER, messageText);
  }

  //проверка отправки сообщения пользователем и ответ бота
  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];

    if (messageList.length === 0 || lastMessage.author !== USER) {
      return;
    }
    const timerID = setTimeout(() => {
      addNewMessage(BOT.name, BOT.message)
    }, 1500)
    
    return () => clearTimeout(timerID);
  }, [messageList])  

  if (!chatItem) {
    return <Redirect to="/chats/" />
  }

  return (
    <Grid container direction="column-reverse">
      {messageList.map(({ id, text, author }) => {
        return (
          <Message
            key={id}
            text={text} 
            author={author}
          />
        )
      })}
      <NewMessage handleButtonClick={handleButtonClick}/>
    </Grid>
  );
}

export default MessageBox;

MessageBox.propTypes = {
  chatList: PropTypes.array
}

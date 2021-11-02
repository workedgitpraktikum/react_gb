import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Message from '../Message/Message';
import NewMessage from '../NewMessage/NewMessage';
import { BOT } from '../../const';
import PropTypes from 'prop-types';
 
const MessageBox = ({ user }) => {
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
    addNewMessage(user, messageText);
  }
  
  //проверка отправки сообщения пользователем и ответ бота
  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];

    if (messageList.length === 0 || lastMessage.author !== user) {
      return;
    }
    const timerID = setTimeout(() => {
      addNewMessage(BOT.name, BOT.message)
    }, 1500)
    
    return () => clearTimeout(timerID);
  }, [messageList, user])  

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
  user: PropTypes.string
}
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Message from "./components/Message/Message";
import NewMessage from './components/NewMessage/NewMessage';
import ChatList from './components/ChatList/ChatList';
import { BOT } from './const';

const CHAT_LIST = [
  {
    id: "chat_01",
    name: "My fancy chat", 
    image: "https://picsum.photos/id/11/40"
  }, 
  {
    id: "chat_02",
    name: "Dolor sit amet", 
    image: "https://picsum.photos/id/22/40"
  }, 
  {
    id: "chat_03",
    name: "Lorem Ipsum", 
    image: "https://picsum.photos/id/33/40"
  }, 
]

function App({ user }) {
  const [messageList, setMessageList] = useState([]);
  
  //функция добавления нового сообщения
  const addNewMessage = (author, text) => {
    setMessageList(messageList => [...messageList, {
      id: author + messageList.length,
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
    <Grid 
      container
      style={{
        marginTop: "4rem",
      }}
    >
      <Grid item xs={3}>
        <ChatList list={CHAT_LIST}/>
      </Grid>
      <Grid item xs={8}>
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
      </Grid>
    </Grid>
  );
}

export default App;

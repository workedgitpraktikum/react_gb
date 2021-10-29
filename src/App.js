import { useEffect, useState } from 'react';
import './App.css';
import Message from "./components/Message/Message";
import NewMessage from './components/NewMessage/NewMessage';
import { BOT } from './const';

function App({ user }) {
  const [messageList, setMessageList] = useState([]);
  
  //функция добавления нового сообщения
  const addNewMessage = (author, text) => {
    setMessageList(messageList => [...messageList, {
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
    <div className="flex-container">
      <NewMessage handleButtonClick={handleButtonClick}/>
      {messageList.map(({ text, author }, i) => {
        return (
          <Message
            key={author + i}
            text={text} 
            author={author}
          />
        )
      })}
    </div>
  );
}

export default App;

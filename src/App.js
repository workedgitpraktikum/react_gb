import { useEffect, useState } from 'react';
import { CssBaseline, Grid, createTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/Header/Header';
import ChatList from './components/ChatList/ChatList';
import Message from "./components/Message/Message";
import NewMessage from './components/NewMessage/NewMessage';
import { BOT, CHAT_LIST } from './const';
import PropTypes from 'prop-types'

const initialTheme = createTheme({
  palette: {
    type: "light"
  }
});

function App({ user }) {
  const [messageList, setMessageList] = useState([]);
  const [theme, setTheme] = useState(initialTheme);

  //функция переключения темы
  const changeThemeType = (isDark, setIsDark) => {
    if (isDark) {
      const theme = createTheme({
        palette: {
          type: "light"
        }
      });
      setTheme(theme);
    } else {
      const theme = createTheme({
        palette: {
          type: "dark"
        }
      });
      setTheme(theme);
    }
    setIsDark(!isDark);
  };

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header changeThemeType={changeThemeType}/>
      <Grid 
        container
        style={{
          marginTop: "4rem",
        }}
      >
        <Grid item xs={3}>
          <ChatList list={CHAT_LIST}/>
        </Grid>
        <Grid item xs={9}>
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
    </ThemeProvider>
  );
}

export default App;

App.propTypes = {
  user: PropTypes.string
}

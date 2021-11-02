import { useState } from 'react';
import { CssBaseline, Grid, createTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/Header/Header';
import ChatList from './components/ChatList/ChatList';
import { CHAT_LIST } from './const';
import PropTypes from 'prop-types'
import MessageBox from './components/MessageBox/MessageBox';

const initialTheme = createTheme({
  palette: {
    type: "light"
  }
});

function App({ user }) {
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
          <MessageBox user={user}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

App.propTypes = {
  user: PropTypes.string
}

import { useState } from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { navigation } from './navigation';

const initialTheme = createTheme({
  palette: {
    type: "light"
  }
});

function App() {
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header changeThemeType={changeThemeType}/>
        <Switch>
          {navigation.map(({ title, link, component}) => {
            return (
              <Route 
                key={title}
                exact={link === "/"}
                path={link} 
                component={component}
              />
            )
          })}
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

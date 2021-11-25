import { useEffect, useState } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch } from "react-router-dom";
import { navigation } from "./navigation";
import { useDispatch, useSelector } from "react-redux";
import { PublicRoute } from "./components/PublicRoute/PublicRoute.js";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.js";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { getIsAuth } from "./store/auth/selectors";
import { signInUser, signOutUser } from "./store/auth/actions";
import { auth } from "./services/firebase";
import { initUserInfo } from "./store/profile/actions";

const initialTheme = createTheme({
  palette: {
    type: "light",
  },
});

function App() {
  const [theme, setTheme] = useState(initialTheme);

  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
        dispatch(
          initUserInfo({
            username: auth.currentUser.displayName,
            email: auth.currentUser.email,
          })
        );
      } else {
        dispatch(signOutUser());
      }
    });
  }, [dispatch]);

  //функция переключения темы
  const changeThemeType = (isDark, setIsDark) => {
    if (isDark) {
      const theme = createTheme({
        palette: {
          type: "light",
        },
      });
      setTheme(theme);
    } else {
      const theme = createTheme({
        palette: {
          type: "dark",
        },
      });
      setTheme(theme);
    }
    setIsDark(!isDark);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header isAuth={isAuth} changeThemeType={changeThemeType} />
        <Switch>
          {navigation.map(({ title, link, component }) => {
            return (
              <PrivateRoute
                auth={isAuth}
                key={title}
                exact={link === "/"}
                path={link}
                component={component}
              />
            );
          })}
          <PublicRoute
            auth={isAuth}
            path={"/sign-in"}
            component={() => <SignIn />}
          />
          <PublicRoute
            auth={isAuth}
            path={"/sign-up"}
            component={() => <SignUp />}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

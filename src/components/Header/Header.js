import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";
import { NightsStayTwoTone, WbSunnyTwoTone } from "@material-ui/icons";
import PropTypes from "prop-types";
import { navigation } from "../../navigation";

const useStyles = makeStyles({
  title: {
    marginRight: 16,
  },
  buttonGroup: {
    flexGrow: 1,
  },
});

const Header = ({ isAuth, changeThemeType }) => {
  const classes = useStyles();
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            Messenger
          </Typography>
          <Box className={classes.buttonGroup}>
            {isAuth &&
              navigation.map(({ title, link, icon }) => {
                return (
                  <Button
                    key={title}
                    color="inherit"
                    to={link}
                    component={Link}
                    startIcon={icon}
                  >
                    {title}
                  </Button>
                );
              })}
          </Box>
          <WbSunnyTwoTone />
          <Switch
            checked={isDark}
            onChange={() => {
              changeThemeType(isDark, setIsDark);
            }}
            name="change theme"
          />
          <NightsStayTwoTone />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

Header.propTypes = {
  changeThemeType: PropTypes.func,
};

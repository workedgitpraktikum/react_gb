import { useState } from "react";
import { AppBar, Toolbar, Typography, Switch, makeStyles } from "@material-ui/core";
import { NightsStayTwoTone, WbSunnyTwoTone } from "@material-ui/icons";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  title: {
    flexGrow: 1
  }
});

const Header = ({ changeThemeType }) => {
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
					<WbSunnyTwoTone/>
					<Switch
						checked={isDark}
						onChange={() => {
							changeThemeType(isDark, setIsDark)
						}}
						name="change theme"
					/>
					<NightsStayTwoTone/>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

Header.propTypes = {
  changeThemeType: PropTypes.func
}

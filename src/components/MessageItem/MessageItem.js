import { Grid, makeStyles, Paper } from "@material-ui/core";
import styles from "./MessageStyles.js";
import PropTypes from "prop-types";
import { BOT } from "../../const";

const useStyles = makeStyles(styles);

const MessageItem = ({ message }) => {
  const { user, text } = message;
  const classes = useStyles();

  return (
    <Grid
      item
      xs={8}
      style={user !== BOT.name ? { marginLeft: "calc(1.25rem + 32%)" } : null}
    >
      <Paper
        className={`
            ${classes.message} 
            ${user === BOT.name ? classes.messageBot : "null"}
          `}
      >
        <h4>{user}</h4>
        <p>{text}</p>
      </Paper>
    </Grid>
  );
};

export default MessageItem;

MessageItem.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
  }),
};

import { useEffect, useRef, useState } from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import styles from "./NewMessageStyles.js";
import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

const NewMessage = ({ handleMessageAdd }) => {
  const classes = useStyles();
  const [messageText, setMessageText] = useState("");

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  return (
    <Grid container justifyContent="flex-end">
      <TextField
        className={classes.newMessage}
        fullWidth
        inputRef={inputRef}
        placeholder="Введите текст сообщения..."
        value={messageText}
        multiline
        minRows={3}
        maxRows={3}
        onChange={(e) => {
          setMessageText(e.target.value);
        }}
      />
      <Button
        color="primary"
        variant="contained"
        className={classes.newMessageButton}
        disabled={!messageText}
        onClick={() => {
          handleMessageAdd(messageText);
          setMessageText("");
        }}
      >
        Отправить
      </Button>
    </Grid>
  );
};

export default NewMessage;

NewMessage.propTypes = {
  handleMessageAdd: PropTypes.func,
};

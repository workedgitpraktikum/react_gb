import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import styles from './NewMessageStyles.js';

const useStyles = makeStyles(styles);

const NewMessage = ({ handleButtonClick }) => {
  const classes = useStyles();
  const [messageText, setMessageText] = useState('');

  const inputRef = useRef(null)

  useEffect(() => inputRef.current.focus());
  
  return (
    <Grid 
      container
      justifyContent="flex-end"
    >
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
          setMessageText(e.target.value)
        }}
      />
      <Button
        color="primary"
        variant="contained"
        className={classes.newMessageButton}
        disabled={!messageText}
        onClick={() => {
          handleButtonClick(messageText);
          setMessageText('')
        }}
      >Отправить</Button>
    </Grid>
  );
}

export default NewMessage;

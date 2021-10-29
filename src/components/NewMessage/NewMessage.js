import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { useState } from 'react';
import styles from './NewMessageStyles.js';

const useStyles = makeStyles(styles);

const NewMessage = ({ handleButtonClick }) => {
  const classes = useStyles();
  const [messageText, setMessageText] = useState('');

  return (
    <Grid 
      container 
      direction="column"
      style={{maxWidth: "66%"}}
      alignItems="flex-end"
    >
      <TextField
        className={classes.newMessage}
        fullWidth
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

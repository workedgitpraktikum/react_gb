import { Grid, makeStyles, Paper } from '@material-ui/core';
import { BOT } from '../../const';
import styles from './MessageStyles.js';

const useStyles = makeStyles(styles);

const Message = ({ text, author }) => {
  const classes = useStyles();

  return (
      <Grid 
        item 
        xs={8}
        style={
          author !== BOT.name 
            ? {marginLeft: "calc(1.25rem + 32%)"} 
            : null
        }
      >
        <Paper
          className={`
            ${classes.message} 
            ${author === BOT.name 
              ? classes.messageBot 
              : 'null'}
          `}
        >
          <h4>{author}</h4>
          <p>{text}</p>
        </Paper>
      </Grid>
  );
}

export default Message;

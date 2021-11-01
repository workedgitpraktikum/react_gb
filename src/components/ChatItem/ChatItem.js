import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

const ChatItem = ({ name, image }) => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={image} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary="1 новое сообщение" />
    </ListItem>
  );
}

export default ChatItem;

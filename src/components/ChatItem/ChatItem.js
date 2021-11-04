import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ChatItem = ({ id, name, image }) => {
  return (
    <ListItem 
      button 
      component={Link}
      to={`/chats/${id}`}
    >
      <ListItemAvatar>
        <Avatar src={image} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary="1 новое сообщение" />
    </ListItem>
  );
}

export default ChatItem;

ChatItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string
}

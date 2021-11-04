import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { DeleteTwoTone } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ChatItem = ({ id, name, image, handleChatDelete }) => {
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
      <IconButton 
        color="secondary"
        onClick={() => {
          handleChatDelete(id)
        }}
      ><DeleteTwoTone/></IconButton>
    </ListItem>
  );
}

export default ChatItem;

ChatItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string
}

import { List } from '@material-ui/core';
import ChatItem from '../ChatItem/ChatItem.js';
import PropTypes from 'prop-types';

const ChatList = ({ list }) => {
  return (
    <List>
      {list.map(({id, name, image}) => {
        return (
          <ChatItem
            key={id}
            name={name}
            image={image}
          />
        )
        })
      }
    </List>
  );
}

export default ChatList;

ChatList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string,
    name:PropTypes.string,
    image:PropTypes.string,
  }))
}

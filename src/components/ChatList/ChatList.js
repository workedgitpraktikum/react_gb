import { List } from '@material-ui/core';
import ChatItem from '../ChatItem/ChatItem.js';

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

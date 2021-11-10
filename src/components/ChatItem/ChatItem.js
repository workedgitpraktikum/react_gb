import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { DeleteTwoTone } from "@material-ui/icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chatDelete } from "../../store/chats/actions";

const ChatItem = ({ chat }) => {
  const { id, image, name } = chat;
  const dispatch = useDispatch();

  return (
    <ListItem button component={Link} to={`/chats/${id}`}>
      <ListItemAvatar>
        <Avatar src={image} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary="1 новое сообщение" />
      <IconButton
        color="secondary"
        onClick={() => {
          dispatch(chatDelete(id));
        }}
      >
        <DeleteTwoTone />
      </IconButton>
    </ListItem>
  );
};

export default ChatItem;

ChatItem.propTypes = {
  chat: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

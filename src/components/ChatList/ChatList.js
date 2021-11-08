import { IconButton, InputBase, List, Paper } from "@material-ui/core";
import ChatItem from "../ChatItem/ChatItem.js";
import PropTypes from "prop-types";
import { useState } from "react";
import { Add } from "@material-ui/icons";

const ChatList = ({ chatList, handleChatAdd, handleChatDelete }) => {
  const [newChatName, setNewChatName] = useState("");
  return (
    <>
      <Paper
        style={{
          paddingLeft: "0.75rem",
          display: "flex",
        }}
      >
        <InputBase
          style={{
            flexGrow: 1,
          }}
          placeholder="Название нового чата"
          value={newChatName}
          onChange={(e) => {
            setNewChatName(e.target.value);
          }}
        />
        <IconButton
          disabled={!newChatName}
          onClick={() => {
            handleChatAdd(newChatName);
            setNewChatName("");
          }}
        >
          <Add />
        </IconButton>
      </Paper>
      <List>
        {chatList.map(({ id, name, image }) => {
          return (
            <ChatItem
              key={id}
              id={id}
              name={name}
              image={image}
              handleChatDelete={handleChatDelete}
            />
          );
        })}
      </List>
    </>
  );
};

export default ChatList;

ChatList.propTypes = {
  chatList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

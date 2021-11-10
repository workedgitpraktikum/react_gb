import { IconButton, InputBase, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { chatAdd } from "../../store/chats/actions";

const CustomInput = ({ placeholder, icon }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
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
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <IconButton
        disabled={!value}
        onClick={() => {
          dispatch(
            chatAdd({
              id: `chat_${Date.now()}`,
              name: value,
              image: `https://picsum.photos/id/11/45`,
              messages: [],
            })
          );
          setValue("");
        }}
      >
        {icon}
      </IconButton>
    </Paper>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.element,
};

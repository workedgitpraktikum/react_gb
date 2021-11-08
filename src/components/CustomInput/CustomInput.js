import { IconButton, InputBase, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";

const CustomInput = ({ placeholder, icon, handleButtonClick }) => {
  const [value, setValue] = useState("");
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
          handleButtonClick(value);
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
  handleButtonClick: PropTypes.func,
};

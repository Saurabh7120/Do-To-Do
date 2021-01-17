import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
//import Checkbox from "@material-ui/core/Checkbox";

export default function TaskEntry({ text, status, handleCheck }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={status}
          name="checkedB"
          style={{ color: status ? "#CECFCE" : "white", fontSize: "20px" }}
          onChange={() => handleCheck()}
        />
      }
      label={text}
      style={{
        width: "100%",
        color: status ? "#CECFCE" : "white",
        paddingLeft: "0px",
        textDecoration: status ? "line-through" : "none"
      }}
    />
  );
}

import React from "react";
import { Tooltip } from "@material-ui/core";
import "./button-style.scss";

export default function Button({ onClick, text }) {
  return (
    <Tooltip title={text === "Add" ? "Add Task" : "Clear List"}>
      <button
        onClick={() => onClick()}
        className={text === "Add" ? "btn-container" : "btn-container-refresh"}
        style={{ color: "white" }}
      >
        <span>{text}</span>
      </button>
    </Tooltip>
  );
}

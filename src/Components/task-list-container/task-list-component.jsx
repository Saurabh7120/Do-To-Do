import React from "react";
import "./task-list-style.scss";
import { Typography, Tooltip } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import Button from "../button/button-component";
import TaskEntry from "../task-entry/task-entry-component";

export default function TaskList({
  openModal,
  taskList,
  handleDone,
  handleRefresh
}) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", minHeight: "394px" }}
    >
      <div className="task-container">
        <div style={{ display: "flex", maxHeight: "294px", overflowY: "auto" }}>
          <div className="task-list">
            {taskList &&
              taskList.map((item) => (
                <TaskEntry
                  text={item.task}
                  status={item.status}
                  handleCheck={() => handleDone(item.id)}
                />
              ))}
            {taskList && taskList.length === 0 && (
              <Typography
                variant="h6"
                style={{ color: "white", textAlign: "left" }}
              >
                Add some tasks!
              </Typography>
            )}
          </div>
          <Tooltip title="Clear List">
            <Button text={<RefreshIcon />} onClick={() => handleRefresh()} />
          </Tooltip>
        </div>
        <div style={{ width: "100%" }}></div>
        <Button text="Add" onClick={() => openModal()} />
      </div>
    </div>
  );
}

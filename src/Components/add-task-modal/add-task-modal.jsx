import React, { useState } from "react";
import { Slide, Fade, TextField, Button } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import "./add-task-modal.scss";

export default function AddTaskModal({ open, handleAdd, handleCancel }) {
  const [task, setTask] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  return (
    <Fade timeout={1000} in={open} className="Modal">
      <modal>
        <TextField
          value={task}
          onChange={handleChange}
          className="text"
          placeholder="What's your plan?"
          style={{
            color: "white!important",
            width: "400px",
            fontSize: "50px!important"
          }}
        />
        <Button
          startIcon={<AddBoxIcon />}
          className="add-btn"
          variant="contained"
          style={{ marginRight: "5px" }}
          onClick={() => {
            setTask("");
            handleAdd({ task, status: false });
          }}
        >
          Add
        </Button>
        <Button
          startIcon={<CancelPresentationIcon />}
          className="cancel-btn"
          variant="contained"
          onClick={() => {
            setTask("");
            handleCancel();
          }}
        >
          Cancel
        </Button>
      </modal>
    </Fade>
  );
}

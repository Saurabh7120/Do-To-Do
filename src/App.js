import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Box } from "@material-ui/core";
import "./App.scss";
import TaskList from "./Components/task-list-container/task-list-component";
import AddTaskModal from "./Components/add-task-modal/add-task-modal";
import CircularProgressContainer from "./Components/circular-progress/circular-progress-component";
import Weather from "./Components/weather-component/weather-component";
import logo from "../public/images/DTDL.jpeg";
import Time from "./Components/time/time-component";

export default function App() {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setTotal(tasks.length);
    let doneTasks = [];
    tasks.map((item) => (item.status ? doneTasks.push(item) : item));
    setCompleted(doneTasks.length);
    let percentage = (doneTasks.length / tasks.length) * 100;
    setPercent(percentage);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevValue) => {
      return [{ ...task, id: tasks.length + 1 }, ...prevValue];
    });
    setModal(false);
  };

  const doneTask = (id) => {
    debugger;
    let current = tasks;
    //let currentTask = current.find((item) => item.id === id);
    current = current.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    // let filteredList = current.filter((item) => item.id !== id);
    // if (currentTask.status === false) {
    //   current = [...filteredList, currentTask];
    // } else {
    //   current = [currentTask, ...filteredList];
    // }
    setTasks(current);
  };

  const refresh = () => {
    setTasks([]);
    setPercent(0);
  };

  return (
    <div className="body">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <img src={logo} alt="logo" />
        <Time />
        <Weather />
      </div>
      <Typography
        variant="h4"
        style={{ color: "white", marginBottom: "90px", fontWeight: "100" }}
      >
        {percent === 100
          ? "All tasks are done! Good Job!"
          : percent < 40 && percent > 0
          ? "It's still a long way to go, come on !"
          : percent < 70 && percent >= 40
          ? "You are half way there! keep it up!"
          : percent < 100 && percent >= 70
          ? "You are almost done!"
          : total === 0
          ? "No Tasks! Are you so free today?"
          : "Start completing your tasks!"}
      </Typography>
      <div className="grid">
        <CircularProgressContainer
          totalTasks={total}
          completed={completed}
          percent={percent}
        />
        <TaskList
          taskList={tasks}
          openModal={() => setModal(true)}
          handleDone={doneTask}
          handleRefresh={refresh}
        />
      </div>
      <AddTaskModal
        open={modal}
        handleAdd={addTask}
        handleCancel={() => setModal(false)}
      />
    </div>
  );
}

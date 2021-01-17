import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography } from "@material-ui/core";
import "./circular-progress-style.scss";

export default function CircularProgressContainer({
  totalTasks,
  completed,
  percent
}) {
  // const [total, setTotal] = useState(0);
  // const [completed, setCompleted] = useState(0);
  // const [percent, setPercent] = useState(0);

  // useEffect(() => {
  //   setTotal(totalTasks.length);
  //   let doneTasks = [];
  //   totalTasks.map((item) => (item.status ? doneTasks.push(item) : item));
  //   setCompleted(doneTasks.length);
  //   let percentage = (doneTasks.length / totalTasks.length) * 100;
  //   setPercent(percentage);
  // }, [totalTasks]);

  return (
    <Box
      position="relative"
      display="inline-flex"
      style={{
        marginRight: "80px",
        transform: "translateY(150px) translateX(-100px)"
      }}
    >
      <CircularProgress
        variant="determinate"
        value={percent}
        style={{ width: "250px", color: "white" }}
      />
      <Box
        top={0}
        left={210}
        bottom={350}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h3"
          className="task-count"
          style={{ color: "white" }}
          component="div"
          color="textSecondary"
        >
          {`${completed}/${totalTasks}`}
        </Typography>
      </Box>
    </Box>
  );
}

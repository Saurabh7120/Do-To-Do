import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

export default function Time() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    let timeElapsed = Date.now();
    let date = new Date(timeElapsed);
    let string = date.toUTCString();
    console.log(string.slice(0, 16));
    setTime(string.slice(0, 16));
  }, []);

  return (
    <div style={{ alignSelf: "center" }}>
      {time && (
        <h1 style={{ color: "white", fontFamily: "Montserrat" }}>{time}</h1>
      )}
    </div>
  );
}

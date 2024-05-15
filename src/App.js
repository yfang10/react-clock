//YUE FANG-Andrew
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [additionalClocks, setAdditionalClocks] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleRefreshClick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  const handleAddClockClick = () => {
    setAdditionalClocks([...additionalClocks, new Date().toLocaleTimeString()]);
  };

  return (
    <div className="App">
      <h1>YUE FANG</h1>
      <p>{time}</p>
      {additionalClocks.map((clock, index) => (
        <p key={index}>{clock}</p>
      ))}
      <button onClick={handleRefreshClick}>Refresh Time</button>
      <button onClick={handleAddClockClick}>Create Another Clock</button>
    </div>
  );
};

export default App;

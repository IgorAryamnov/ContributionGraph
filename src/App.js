import moment from "moment";
import "./App.css";
import { Timeline, generateTimelineData } from "./Components";
import { useEffect, useState } from "react";

moment.locale("ru");

function App() {
  const [data, setData] = useState({});
  const timelineData = generateTimelineData(data);

  useEffect(() => {
    fetch("https://dpg.gg/test/calendar.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <>
      <Timeline data={timelineData} />
    </>
  );
}

export default App;

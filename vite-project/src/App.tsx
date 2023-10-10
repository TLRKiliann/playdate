import {useState, useEffect} from 'react';
import './App.css'

function App() {

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const otherDate = new Date();

  const hours = otherDate.getHours();
  const minutes = otherDate.getMinutes();
  const seconds = otherDate.getSeconds();

  const fullDate = otherDate.toLocaleString() + "";

  const day = otherDate.getDate();
  const month = otherDate.getMonth() + 1;
  const fullYear = otherDate.getFullYear();

  return (
    <>
      <h1>Date in react</h1>
      <div className="container--date">

        <p>Local date: {fullDate}</p>
        
        <div className="box--date">
          <p>Day: {day}</p>
          <p>Month: {month}</p>
          <p>Year: {fullYear}</p>
        </div>

        <div className="box--date">
          <p>Raw time: {time}</p>
          <p>Time: {hours}:{minutes}:{seconds}</p>
        </div>

      </div>
    </>
  )
}

export default App

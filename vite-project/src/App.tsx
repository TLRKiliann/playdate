//import { useState } from 'react'
import './App.css'

type DateProps = {
  dataDate: string;
}


function App() {
  //const [count, setCount] = useState(0)
  const otherDate = new Date();

  const hours = otherDate.getHours();
  const minutes = otherDate.getMinutes();
  const seconds = otherDate.getSeconds();

  return (
    <>
      <h1>Date in react</h1>
      <div>
        <p>Local Date: {otherDate.toLocaleString() + ""}</p>
        <p>Day: {otherDate.getDate()}</p>
        <p>Month: {otherDate.getMonth()}</p>
        <p>Year: {otherDate.getFullYear()}</p>
        <p>Time: {hours}:{minutes}:{seconds}</p>
      </div>
    </>
  )
}

export default App

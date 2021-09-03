import React,{useState,useRef} from "react"
import './App.css'
function App() {
  const [milisecond, setMilisecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const increment = useRef(null);



  const startChrono =()=>{
    increment.current = setInterval(()=>{
      setMilisecond(prev=>prev+1) 
   },10)
  }
   
  const stopChrono = ()=>{
    clearInterval(increment.current);
  }

  const resetChrono = () =>{
    clearInterval(increment.current);
    setMilisecond(0);
    setSecond(0);
    setMinute(0)
  }

  const myFunction = () =>{
    setMilisecond(0);
    setSecond(prev =>prev+1);
  }

  const myFunction2 = () =>{
    setSecond(0);
    setMinute(prev =>prev+1);
  }

  const time = ()=>{
    const newMilisecond = milisecond === 100 ? myFunction(): milisecond < 10 ? `0${milisecond}` : milisecond;
    const newSecond = second === 60 ? myFunction2() : second < 10 ? `0${second}` : second;
    const newMinute = minute < 10 ? `0${minute}` : minute;

    return `${newMinute}:${newSecond}:${newMilisecond}`
  }

  return (
    <div className="App">
      <h1>React Chronometer</h1>
      <div className="chrono">
        <div className="time">{time()}</div>
        <div className="buttons">
          <button onClick={startChrono}>START</button>
          <button onClick={stopChrono}>STOP</button>
          <button onClick={resetChrono}>RESET</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;

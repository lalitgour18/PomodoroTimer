import React, { useState,useEffect } from 'react';
import './Pomodoro.css'
import { useNavigate } from 'react-router-dom';
const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const navigate = useNavigate();
  let handleLogout = () =>{
    localStorage.clear()
    if(!localStorage.getItem("email_verified")){navigate("/")}
  }
 

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);

            if (isBreak) {
              // Break session complete
              alert('Break session complete!');
              setIsBreak(false);
            } else {
              // Pomodoro session complete
              alert('Pomodoro session complete! Take a break.');
              setIsBreak(true);
              setMinutes(5);
            }

            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, isBreak, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div>
      <h1>{isBreak ? 'Break Timer' : 'Pomodoro Timer'}</h1>
      <div>
        <p>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
      <div>
        <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={handleLogout} style={{backgroundColor:"red"}}>Logout</button>
      </div>
      <div >
      </div>
    </div>
  );
};

export default PomodoroTimer;

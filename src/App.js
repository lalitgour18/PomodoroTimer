import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './PomodoroLogin/Authenticaion/Login';
import Pomodoro from './PomodoroLogin/Authenticaion/Pomodoro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/ggd' element={<Pomodoro/>}></Route>          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

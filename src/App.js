import './App.css';
import logo from './assets/logo.png'
import TextAreaInput from './components/TextArea/TextArea';
import {useState} from "react";
import Bubbles from './components/Bubbles/Bubble';
import Circle from "./components/Circle/Circle";

function App() {
  const [value, setValue] = useState('Text something')

  return (
    <div className="App">
      <img className='logo' src={logo} alt="/"/>
      <Circle text={value}/>
      <TextAreaInput setValue={setValue}/>
      <Bubbles text={value}/>
    </div>
  );
}

export default App;
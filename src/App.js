// import logo from './logo.svg';
import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { useState } from 'react';
import AppNav from './components/AppNav';
import TextForm from './components/TextForm';
import Message from './components/Message';
import About from './components/About';


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><TextForm /></>,
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>,
  //   },
  // ]);

  const [message,setMessage] = useState(null);
  
  const showMessage =(type,message)=>{
    setMessage({
      msg:message,
      type:type
    });
    setTimeout(()=>{setMessage(null)},2000);
  }




  const [darkMode, setDarkMode] = useState({
    backgroundColor:'white',
    color:'black'
  });
  const [bootstrapDarkMode,setBootstrapDarkMode] = useState('light');
  const [darkModeButton,setDarkModeButton] = useState('Dark');

  const switchDarkMode = () =>{
    document.body.className='';
    if (darkMode.backgroundColor === 'white') {
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      setDarkMode({
        backgroundColor:'black',
        color:'white'
      })
      setBootstrapDarkMode('dark');
      setDarkModeButton('light');
    }else{
      setDarkMode({
        backgroundColor:'white',
        color:'black'
      })
      setBootstrapDarkMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      setDarkModeButton('dark');


    }
  }

  const changeColor = (color)=>{
    // document.body.style.background = bg;
    // document.body.style.color = 'clr';
    document.body.className='';
    document.body.classList.add('bg-'+color);
    setBootstrapDarkMode(color);

  }


  return (
      <>
      <AppNav bootstrapDarkMode={bootstrapDarkMode}></AppNav>
      <Message message={message} ></Message>
        <Routes>
          <Route path='/' element={<TextForm head="This is a Application of text Analyser" mode={switchDarkMode} darkMode={darkMode} bootstrapDarkMode={bootstrapDarkMode} darkModeButton={darkModeButton} showMessage={showMessage}
          changeColor={changeColor}/>} />

          <Route path='/about' element={<About/>} />
        </Routes>
      </>

  );
}

export default App;

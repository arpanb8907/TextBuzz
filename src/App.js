import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textbox from './Textbox';
import Alert from './Alert';
import { useState,useEffect } from 'react';
import About from './About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [alert,setalert] = useState(null);
  const [mode,setmode] = useState('light');

//   const [mode, setmode] = useState(()=>{

//     const saved = localStorage.getItem("mode");
//     const initialValue = JSON.parse(saved);
//     return initialValue ;
    


// });


// useEffect(() => {
    
//     localStorage.setItem("mode", JSON.stringify(mode));
//   }, [mode]);


  const switchon = ()=>{

    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showalert("darkmode enabled","success");
    }

    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("lightmode enabled","success");
    }

  }
  const showalert = (message,type)=>{

      setalert({

        msg:message,
        type:type

      })

      setTimeout(() => {
        setalert(null);
      }, 2000);
  }
  
  return (
    <>
      
    <Router>

      <Navbar title = "Textbuzz" aboutus="About us" mode={mode} switchon={switchon}/>
      
  
      <Alert alert={alert}></Alert>
      
      <Switch>
          <Route path="/about">
            <About mode={mode} switchon={switchon}/>
          </Route>
          
          <Route path="/">
            <Textbox mode={mode} showalert={showalert}/>
          
          </Route>
      </Switch>



    

      
      
    </Router>
    </>
    
  );
}

export default App;

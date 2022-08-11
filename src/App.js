import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textbox from './Textbox';
import Alert from './Alert';
import { useState } from 'react';

function App() {

  const [alert,setalert] = useState(null);
  const [mode,setmode] = useState('light');

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
      
      

      <Navbar title = "Textbuzz" aboutus="About us" mode={mode} switchon={switchon}/>
      
  
      <Alert alert={alert}></Alert>
      
      <Textbox showalert={showalert} mode={mode}>   </Textbox>


      
      
    </>
    
  );
}

export default App;

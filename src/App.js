import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textbox from './Textbox';
import Alert from './Alert';
import { useState } from 'react';

function App() {

  const [alert,setalert] = useState(null);

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
      
      

      <Navbar title = "Textbuzz" aboutus="About us"/>
      
  
      <Alert alert={alert}></Alert>
      
      <Textbox showalert={showalert} >   </Textbox>


      
      
    </>
    
  );
}

export default App;

import logo from './logo.svg';
import Nav from './components/Nav';
import Text from './components/Text';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [alert , setAlert] = useState(null);

  const showAlert=(message , type)=>{

         setAlert(
           {
             msg:message,
             type:type
           }
         )

         setTimeout(() => {
          setAlert(null)
         }, 2000);
  }

   const [mode , setMode] = useState("light");
   const [greenmode , setGreenMode] = useState("light");


   const greenToggle=()=>{
 
         if(mode!=="#d63384"){

             setGreenMode("#d63384");
         }
         else{
            setGreenMode("light")
         }
   }

   const togglemode=()=>{

        if(mode==="light"){
            
             setMode("dark");
             document.body.style.backgroundColor = "black";
             showAlert("File has been opened", "success");
             

        }
        else{

           setMode("light");
           document.body.style.backgroundColor = "white";
           showAlert("File has been opened", "success");
        }
        console.log("clicked")
   }

 

  return (
    <>
    {/* <Router> */}

      <Nav mode={mode} togglemode={togglemode} greenmode={greenmode} greenToggle={greenToggle} />
      {/* <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element= />
        </Routes> */}
        <Text mode={mode} togglemode={togglemode} greenToggle={greenToggle} showAlert={showAlert} />
        
      <Alert alert={alert} />
    
    {/* </Router> */}
    </>
  );
}

export default App;

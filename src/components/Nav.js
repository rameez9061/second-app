import React , {useState} from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


export default function Nav(props) {

  // const [mystyle , setMystyle] = useState(props.custom)

  // let changing=()=>{
  //   if(mystyle.color == "black"){

  //       setMystyle({
  //         color:"white",
  //         backgroundColor:"black"
  //       })
  //   }
  //   else{

  //    setMystyle( {
  //       color:"black",
  //       backgroundColor:"white",
  //     })
  //   }

  //   console.log("clicked")
     
  // }


  const [currentMode , setCurrentMode] = useState(props.mode);

  const handleModes=()=>{

       if(currentMode === props.mode){

            setCurrentMode(props.greenMode);
       }
       else{

           setCurrentMode(props.mode);
       }
  }
   
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${currentMode} bg-${currentMode}`}>
  <div className="container-fluid ">
    <a className="navbar-brand" href="#" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" >link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Dropdown
          </a>
          <ul className="dropdown-menu" >
            <li><a className="dropdown-item" href="#" >Action</a></li>
            <li><a className="dropdown-item" href="#" >Another action</a></li>
           
            <li><a className="dropdown-item" href="#" >Something else here</a></li>
          </ul>
        </li>
        <button id='modeChange' onClick={props.togglemode}  >Mode</button>
        <button id='modeChange' onClick={handleModes}  >Pink Mode</button>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  );
}


{/* Nav.PropTypes={

     logo:PropTypes.string,

}

Nav.defaultProps={

   logo:"Logo",
} */}

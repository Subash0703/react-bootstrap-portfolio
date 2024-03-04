import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Routing from './Components/Routing/Routing';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
    

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
       <Routing />
    </div>
  );
}

export default App;

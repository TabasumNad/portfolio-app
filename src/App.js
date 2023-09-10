import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import {BrowserRouter as Router, Route , Routes,Navigate} from "react-router-dom";
import Contact from './Components/Contact';
import Project from './Components/Project';

function App() {
  return (
    <div className="App">
      
     
      {/* <Router> */}
      <Header/>
      <About/>
      <Skills/> 
      <Project/>
      <Contact/>
      {/* <Routes>
       
           {/* <Route path="/skills" element={<Skills/>}/> */}
         
        

    </div>
  );
}

export default App;

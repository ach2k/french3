
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Homess from './components/Homess';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='About' element={<About/>}/>
      <Route path='Homess' element={<Homess/>}/>
    </Routes>
  );
}

export default App;

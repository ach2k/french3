import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path=''/>
    </Routes>
  );
}

export default App;

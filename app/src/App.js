import './App.css';
import { Home } from './pages/home';
import { Portfolio } from './pages/portfolio';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/portfolio" element={ <Portfolio /> } />
      </Routes>
    </Router>
  );
}

export default App;

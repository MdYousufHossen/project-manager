import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import useAuthCheck from './hooks/useAuthCheck';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
function App() {
  const authChecked=useAuthCheck()
  return!authChecked?(
    <div>Checking authentication.........</div>
  ): (
    <Router>
      <Routes>
        <Route path='/' element={<PublicRoute> <Login/></PublicRoute>}/>
        <Route path='/teams' element={<PrivateRoute><Teams/></PrivateRoute>}/>
        <Route path='/projects' element={<PrivateRoute><Projects/></PrivateRoute>}/>
      </Routes>
    </Router>
     
   
  );
}

export default App;

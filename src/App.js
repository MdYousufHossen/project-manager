import React from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FadeLoader } from 'react-spinners';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import useAuthCheck from './hooks/useAuthCheck';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Register from './pages/Register';
import Teams from './pages/Teams';
function App() {
  const authChecked=useAuthCheck()
  return!authChecked?(
    <FadeLoader cssOverride={{margin:"auto"}} color="#36d7b7" />
  ): (
    <Router>
      <Routes>
        <Route path='/' element={<PublicRoute> <Login/></PublicRoute>}/>
        <Route path='/register' element={<PublicRoute> <Register/></PublicRoute>}/>
        <Route path='/teams' element={<PrivateRoute><Teams/></PrivateRoute>}/>
        <Route path='/projects' element={
          <DndProvider backend={HTML5Backend}>
            <PrivateRoute>
              <Projects/>
            </PrivateRoute>
          </DndProvider>}/>
      </Routes>
    </Router>
     
   
  );
}

export default App;

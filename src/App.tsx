import React from 'react';

import './App.css';
import { Routes,Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FavoritsPage } from './pages/FavoritsPage';
import { NavigarionBar } from './components/NavigationBar';

function App() {
  return (
    <>
        <NavigarionBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/fav" element={<FavoritsPage/>}/>
        </Routes>
    </>

 

  );
}

export default App;

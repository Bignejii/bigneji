import React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Getall from './Components/Getall.jsx';
import NavScrollExample from './Components/NavbarComponent.jsx';
import Home from './Components/Home.jsx';
import './App.css';

function App() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <>
      <NavScrollExample />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path="/products" element={<Getall category={category} />} />
      </Routes>
    </>
  );
}

export default App

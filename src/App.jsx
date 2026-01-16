import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './Components/Home.jsx';
import Demo from './Components/Demo.jsx';
import About from './Components/About.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;

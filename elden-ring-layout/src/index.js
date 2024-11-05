import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Weapons from './pages/Weapons';
import Armor from './pages/Armor';
import Talismans from './pages/Talismans';
import Location from './pages/Location';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stats" element={<Stats />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="armor" element={<Armor />} />
          <Route path="talismans" element={<Talismans />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(<App />);


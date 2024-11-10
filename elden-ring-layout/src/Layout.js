import "./css/Layout.css";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import {Outlet,Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
    <Header />
    <button onClick={toggleMenu}>Open Nav Bar</button>

    <nav id="main-nav" className={menuOpen?"":"hide-small"}>
    <ul className="columns">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stats">Stats</Link></li>
        <li><Link to="/weapons">Weapons</Link></li>
        <li><Link to="/armor">Armor</Link></li>
        <li><Link to="/talismans">Talismans</Link></li>
        <li><Link to="/location">Location</Link></li>
    </ul>
    </nav>

    <Outlet />

    <Footer />
    </>
  );
};

export default Layout;
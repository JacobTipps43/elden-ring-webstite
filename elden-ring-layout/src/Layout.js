import "./css/Layout.css";
import {Outlet,Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
    <nav id="main-nav">
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/stats">Stats</Link></li>
        <li><Link to="/weapons">Weapons</Link></li>
        <li><Link to="/armor">Armor</Link></li>
        <li><Link to="/talismans">Talismans</Link></li>
        <li><Link to="/locations">Location</Link></li>
    </ul>
    </nav>

    <Outlet />

    <p>This is my footer</p>
    </>
  );
};

export default Layout;
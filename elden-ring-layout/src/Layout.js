import "./css/Layout.css";
import {Outlet,Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
    <nav id="main-nav">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Stats</Link></li>
        <li><Link to="/">Weapons</Link></li>
        <li><Link to="/">Armor</Link></li>
        <li><Link to="/">Talismans</Link></li>
        <li><Link to="/">Location</Link></li>
    </ul>
    </nav>

    <Outlet />

    <p>This is my footer</p>
    </>
  );
};

export default Layout;
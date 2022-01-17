import React from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Stephen</h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}></a>
              {item.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

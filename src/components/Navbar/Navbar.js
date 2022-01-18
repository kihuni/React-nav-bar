import React, {useState} from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../Button';
const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => setClicked(!clicked)
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Stephen</h1>
      <div className="menu-icon" onClick = {handleClick}>
         {clicked ? <CloseIcon /> : <MenuIcon />}

      </div>
      <ul className={clicked ? 'menu-bar active' : 'menu-bar'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
              {item.title}  
              </a>
             
            </li>
          );
        })}
      </ul>
      <Button>Sign up</Button>
    </nav>
  );
};

export default Navbar;

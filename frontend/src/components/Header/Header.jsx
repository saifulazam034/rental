import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const auth =localStorage.getItem('users');
  const Navigate = useNavigate();
  const Logout =()=>{
    localStorage.clear();
    Navigate("/LOgIn")
  }

  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
  
   <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        

        {/* logo */}
        <Link to="/">
        <img  className ="logo" src="./logo13.png" alt="logo" />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
           { auth ?(
            <>
           <NavLink to="Residencies">Residencies</NavLink>
              <a href="saifulazam279@gmail.com">Contact</a>
              <NavLink to="AddResidency">AddResidencies</NavLink>
              <button className="button">
              <NavLink onClick={Logout} to="LogIn">LogOut({JSON.parse(auth).Name})</NavLink>
             
              </button>
              </>
               ):(
                <>
                <button className="button">
               <NavLink className="login"to="Signup">LogIn</NavLink>
               </button>
               </>)}
              
   

          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

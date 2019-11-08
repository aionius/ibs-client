import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/bookshelf.svg";

const Header = () => (
   <div className="header">
      <Link className="logo-container" to="/">
         <Logo className="log"></Logo>
      </Link>
      <div className="options">
         <Link className="option" to="/shop">
            SHOP
         </Link>
         <Link className="option" to="/contact">
            CONTACT
         </Link>
      </div>
   </div>
);

export default Header;

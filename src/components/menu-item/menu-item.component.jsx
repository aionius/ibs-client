import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ isbn13, imageURL, match, history }) => {
   console.log(match);
   return (
      <div
         className="menu-item"
         onClick={() => history.push(`${match.url}book/${isbn13}`)}
      >
         <div
            className="background-image"
            style={{
               backgroundImage: `url(${imageURL})`
            }}
         ></div>
         <div className="content">
            <h1 className="title">DETAILS</h1>
            <span className="subtitle">Add To Cart</span>
         </div>
      </div>
   );
};

export default withRouter(MenuItem);

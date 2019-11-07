import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
   <div className="homepage">
      <div className="directory-menu">
         <div className="menu-item">
            <div className="content">
               <h1 className="title">JAVA</h1>
               <span className="subtitle">SHOP NOW</span>
            </div>
         </div>
         <div className="menu-item">
            <div className="content">
               <h1 className="title">PHP</h1>
               <span className="subtitle">SHOP NOW</span>
            </div>
         </div>
         <div className="menu-item">
            <div className="content">
               <h1 className="title">REACT</h1>
               <span className="subtitle">SHOP NOW</span>
            </div>
         </div>
         <div className="menu-item">
            <div className="content">
               <h1 className="title">PYTHON</h1>
               <span className="subtitle">SHOP NOW</span>
            </div>
         </div>
         <div className="menu-item">
            <div className="content">
               <h1 className="title">C++</h1>
               <span className="subtitle">SHOP NOW</span>
            </div>
         </div>
         <div className="menu-item">
            <div className="content">
               <h1 className="title">JavaScript</h1>
               <span className="subtitle">SHOP NOW</span>
            </div>
         </div>
      </div>
   </div>
);

export default HomePage;

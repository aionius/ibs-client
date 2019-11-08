import React from "react";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";
const HomePage = () => (
   <div className="homepage">
      <div>New Releases</div>
      <Directory />
   </div>
);

export default HomePage;

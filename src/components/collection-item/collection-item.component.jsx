import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ isbn13, title, price, imageURL }) => (
   <div className="collection-item">
      <div
         className="image"
         style={{
            backgroundImage: `url(${imageURL})`
         }}
      ></div>
      {/* <div className="collection-footer">
         <span className="title">{title}</span>
      </div> */}
   </div>
);

export default CollectionItem;

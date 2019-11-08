import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ searchTerm, books }) => {
   return (
      <div className="collection-preview">
         <h1>{searchTerm}</h1>
         <div className="preview">
            {books.map(book => (
               <CollectionItem
                  key={book.isbn13}
                  isbn13={book.isbn13}
                  title={book.title}
                  price={book.price}
                  imageURL={book.image}
               />
            ))}
         </div>
      </div>
   );
};
export default CollectionPreview;

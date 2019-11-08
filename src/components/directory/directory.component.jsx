import React from "react";
import axios from "axios";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
   constructor() {
      super();

      this.state = {
         books: []
      };
   }

   componentDidMount() {
      axios
         .get("/api/books/new")
         .then(result => {
            this.setState({
               books: result.data.books
            });
            console.log(result.data.books);
         })
         .catch(error => console.log(error));
   }

   render() {
      return (
         <div className="directory-menu">
            {this.state.books.map(({ isbn13, image }) => (
               <MenuItem key={isbn13} isbn13={isbn13} imageURL={image} />
            ))}
         </div>
      );
   }
}

export default Directory;

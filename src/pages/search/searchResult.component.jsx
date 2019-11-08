import React from "react";
import axios from "axios";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class SearchResultPage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         collections: []
      };
   }

   componentDidMount() {
      axios
         .get("/api/books/search/java")
         .then(results => {
            console.log(results);
            this.setState({
               collections: results.data.books
            });
         })
         .catch(err => console.log(err));
   }

   render() {
      const { collections } = this.state;
      return (
         <div className="shop-page">
            <CollectionPreview searchTerm="java" books={collections} />
         </div>
      );
   }
}

export default SearchResultPage;

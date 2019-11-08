import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import SearchResultPage from "./pages/search/searchResult.component";
import Header from "./components/header/header.component";

const BookDetails = props => {
   console.log(props);
   return <div>Books page</div>;
};

function App() {
   return (
      <div>
         <Header />
         <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/search" component={SearchResultPage} />
            <Route path="/book/:isbn13" component={BookDetails} />
         </Switch>
      </div>
   );
}

export default App;

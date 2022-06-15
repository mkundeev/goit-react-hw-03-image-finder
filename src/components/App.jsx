import React from "react";

import Searchbar  from "./Searchbar";


class App extends React.Component{

  onHendlSearch = e => {
  e.preventdefault()
  console.log(e.elements.search.value)
}


  render(){
     return (
    <div>
         <Searchbar onSearch={this.onHendlSearch} />
    </div>
  );
  }
}


export {App}

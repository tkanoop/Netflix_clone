import React from "react";
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import {action,comedy,horror,originals, romantic, trending} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url= {action} title='Action' isSmall/>
      <RowPost url={trending} title='trending' isSmall/>
      <RowPost url={romantic} title='romantic' isSmall/>
      <RowPost url={horror} title='horror' isSmall/>
      <RowPost url={comedy} title='comedy' isSmall/>
      <RowPost url={originals} title='originals' isSmall/>


    </div>
  );
}

export default App;

import React from "react";
//import Styles
import "./styles/app.scss";
//Add components
import Player from "./components/Player";
import Song from "./components/Song";
//Add Util.js
import data from "./util";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;

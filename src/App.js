import React, { useState } from "react";
//import Styles
import "./styles/app.scss";
//Add components
import Player from "./components/Player";
import Song from "./components/Song";
//Add Util.js
import data from "./util";

function App() {
  //Add state
  const [songs, setSongs] = useState(data);
  const [currentsong, setCurrentsong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentsong} />
      <Player currentSong={currentsong} />
    </div>
  );
}

export default App;

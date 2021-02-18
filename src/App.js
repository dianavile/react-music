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
  const [isPlaying, setIsPlaying] = useState(false); //by default
  return (
    <div className="App">
      <Song currentSong={currentsong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentsong}
      />
    </div>
  );
}

export default App;

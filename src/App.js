import React, { useState, useRef } from "react";
//import Styles
import "./styles/app.scss";
//Add components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//Add Util.js
import data from "./util";

function App() {
  //Ref returns mutable ref object, who´s current property is initialized to the passed argument.
  const audioRef = useRef(null);
  //Add state
  const [songs, setSongs] = useState(data);
  const [currentsong, setCurrentsong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false); //by default
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  return (
    <div className="App">
      <Song currentSong={currentsong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentsong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        // setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} //when audiofile loads up
        ref={audioRef}
        // src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;

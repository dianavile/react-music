import React, { useState, useRef } from "react";
import "./styles/app.scss";
//Add components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Add Util.js
import data from "./util";
//Util

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentsong, setCurrentsong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false); //by default
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentsong} setCurrentsong={setCurrentsong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        // currentSong={currentSong}
        // setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        // setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler} //when audiofile loads up
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        // src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;

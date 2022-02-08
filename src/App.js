import React from "react";
import { useState, useEffect } from "react";
import RandomJokes from "./RandomJokes.js";
import CreatePlaylist from "./CreatePlaylist.js";
import Playlists from "./Playlists.js";
import FeaturedJoke from "./FeaturedJoke.js";
import axios from "axios";
import Joke from "./Joke.js";

const App = () => {
  //! Task 1: Random Joke List (see RandomJokes.js & Joke.js)

  const [sixJokes, setSixJokes] = useState([]);

  useEffect(function loadSixJokes() {
    axios
      .get("https://karljoke.herokuapp.com/jokes/programming/6")
      .then((result) => {
        setSixJokes(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //! Task 2: Create Playlist (see CreatePlaylist.js & backend app.js)

  const [playlist, setPlaylist] = useState();
  const [chosenPlaylist, setChosenPlaylist] = useState();

  const handlePlaylistChange = (event) => {
    setPlaylist(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setChosenPlaylist(playlist);

    axios.post(`/playlists/${playlist}`).then(console.log(playlist));
  };

  //! Task 3: API (see backend app.js)

  //! Task 4: List of Playlists

  const [playlistArray, setPlaylistArray] = useState();
  const [changePlaylist, setChangePlaylist] = useState(false);

  useEffect(
    function getPlaylists() {
      axios
        .get("/playlists")
        .then((result) => {
          setPlaylistArray(result.data);
        })
        .catch((error) => console.log(error));
    },
    [chosenPlaylist, changePlaylist]
  );

  //! Task 5: Featured Joke (see FeaturedJoke.js)

  const [featuredStatus, setFeaturedStatus] = useState(false);

  //! Task 6: Adding Jokes to a Playlist (Joke.js, and backend app.js)

  const [selectedPlaylist, setSelectedPlaylist] = useState();

  const handleChangePlaylist = (event) => {
    const valuePlaylist = event.target.value;
    setSelectedPlaylist(valuePlaylist);
  };

  const handleSubmitPlaylist = (event, joke) => {
    event.preventDefault();
    axios
      .patch(`/playlists/${selectedPlaylist}`, joke)
      .catch((error) => console.log(error));
    setChangePlaylist(!changePlaylist);
  };

  //! Task 7: Reorganize Code to use Render Props

  const renderJoke = (joke) => (
    <Joke
      joke={joke}
      playlistArray={playlistArray}
      handleChangePlaylist={handleChangePlaylist}
      handleSubmitPlaylist={handleSubmitPlaylist}
    />
  );

  return (
    <div className="app">
      <h1>Joke App 😂</h1>
      <button onClick={() => setFeaturedStatus(!featuredStatus)}>
        Show Featured
      </button>
      {featuredStatus && <FeaturedJoke renderJoke={renderJoke} />}
      <RandomJokes
        sixJokes={sixJokes}
        renderJoke={renderJoke}
        // handleSubmitPlaylist={handleSubmitPlaylist}
      />
      <CreatePlaylist
        handleFormSubmit={handleFormSubmit}
        handlePlaylistChange={handlePlaylistChange}
      />
      <Playlists playlistArray={playlistArray} />
    </div>
  );
};

export default App;

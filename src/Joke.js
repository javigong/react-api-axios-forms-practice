import React from "react";

const Joke = (props) => {
  return (
    <div className="joke">
      <p>{props.joke.setup}</p>
      <p className="bold">{props.joke.punchline}</p>
      <form
      onSubmit={(event) => props.handleSubmitPlaylist(event, props.joke)}
      >
        <label>
          Add to list
          <select
            onChange={(event) => props.handleChangePlaylist(event)}
            defaultValue="default"
          >
            <option disabled value="default">
              -- choose a playlist --
            </option>
            {props.playlistArray.map((playlist) => (
              <option key={playlist.name} value={playlist.name}>
                {playlist.name}
              </option>
            ))}
          </select>
        </label>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Joke;

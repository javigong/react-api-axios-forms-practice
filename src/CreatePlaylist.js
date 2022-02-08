import React from "react";

const CreatePlaylist = (props) => {
  return (
    <div className="createPlaylist">
      <h2>Create Playlist</h2>
      <form onSubmit={(event) => props.handleFormSubmit(event)}>
        <label for="toCreatePlaylist">
          Name of list
        </label>
        <input type="text" id="toCreatePlaylist" value={props.playlist} onChange={(event) => props.handlePlaylistChange(event)} />
        <button>create playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
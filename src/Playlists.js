import React from "react";

const Playlists = (props) => {
  return (
    <div>
      <h2>Playlists</h2>
      {props.playlistArray ? (
        <div>
          {props.playlistArray.map((playlist, key) => (
            <div className="playlistWrapper" key={key}>
              <ul>
                <li>{`${playlist.name}:`}</li>
                <ul>
                  {playlist.list.length != 0 &&
                    playlist.list.map((joke, key) => (
                      <li key={key}>
                        <p>{joke.setup}</p>
                        <p>{joke.punchline}</p>
                      </li>
                    ))}
                </ul>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Playlists;

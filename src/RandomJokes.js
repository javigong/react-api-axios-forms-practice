import React from "react";

const RandomJokes = (props) => {
  
  return (
    <div className="jokes">
      <h2>Random Jokes</h2>
      {props.sixJokes ? (
        <ul>
          {props.sixJokes.map((joke) => (
            <li key={joke.id}>
              {props.renderJoke(joke)}
            </li>
          ))}
        </ul>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default RandomJokes;

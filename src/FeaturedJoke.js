import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const FeaturedJoke = (props) => {
  const [joke, setFeaturedJoke] = useState({});
  const frequency = 8000;

  useEffect(function setFeaturedJokeInterval() {
    const reload = () => {
      axios
        .get("https://karljoke.herokuapp.com/jokes/programming/random")
        .then((result) => {
          setFeaturedJoke({ ...result.data[0] });
        })
        .catch((error) => console.log(error));
    };
    let reloader = setInterval(reload, frequency);
    reload();

    return function stopReloading() {
      clearInterval(reloader);
    };
  }, []);

  return (
    <div className="jokes">
      <h2>Featured Joke</h2>
      {props.renderJoke(joke)}
    </div>
  );
};

export default FeaturedJoke;

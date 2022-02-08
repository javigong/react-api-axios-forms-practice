const express = require("express");
const app = express();
const server = app.listen(process.env.PORT || 8080, () =>
  console.log("Listening on 8080")
);

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//! Array of Playlists

app.locals.playlists = [];

//! Route handlers

app.post("/playlists/:name", (req, res) => {
  const newPlaylist = {
    name: req.params.name,
    list: [],
  };
  app.locals.playlists.push(newPlaylist);
  // console.log(app.locals.playlists);
});

app.get("/playlists", (req, res) => {
  res.json(app.locals.playlists);
});

app.patch("/playlists/:listName", (req, res) => {
  const selectedJoke = req.body;
  const playlists = app.locals.playlists;

  playlists.map((playlist) => {
    playlist.name == req.params.listName && playlist.list.push(selectedJoke);
    // console.log(req.params.listName);
    // console.log(playlists);
  });
});

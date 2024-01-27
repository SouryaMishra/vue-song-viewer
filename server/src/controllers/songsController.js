const { Song } = require("../models");

module.exports = {
  async getAll(_, res) {
    try {
      const song = await Song.findAll({ limit: 10 });
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error:
          "Something went wrong while trying to fetch songs, please try again later",
      });
    }
  },
  async post(req, res) {
    try {
      const newSong = await Song.create(req.body);
      res.send(newSong);
    } catch (err) {
      res.status(500).send({
        error:
          "Something went wrong while trying to creste the song, please try again later",
      });
    }
  },
};

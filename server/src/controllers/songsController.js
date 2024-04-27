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
  async getById(req, res) {
    try {
      const song = await Song.findOne({ where: { id: req.params.songId } });
      if (!song)
        return res.status(404).send({
          error: "Song not found",
        });
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error:
          "Something went wrong while fetching the song, please try again later",
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

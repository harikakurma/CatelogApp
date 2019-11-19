const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const Movies = require("../../models/Movies");
router.post(
  "/",
  [
    check("name", "name of the movie is required")
      .not()
      .isEmpty(),
    check("director", "name of the director is requireds")
      .not()
      .isEmpty(),
    check("uploadedDate", "requires date"),
    sanitizeBody("uploadedDate").toDate(),
    check("releaseDate", "requires date"),
    sanitizeBody("releaseDate").toDate()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      id,
      name,
      director,
      category,
      story,
      cast,
      uploadDate,
      releaseDate,
      avatar
    } = req.body;
    try {
      let movie = await Movies.findOne({ name });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }

    res.send("Movies route");
  }
);

module.exports = router;

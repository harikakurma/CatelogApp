const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  _id: mongoose.type.ObjectId,
  name: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ["action", "horror", "thriller", "comedy", "romantic"]
  },
  story: {
    type: String
  },
  releaseDate: {
    type: Date,
    required: true
  },
  cast: {
    type: Array
  },
  uploadedDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  avatar: {
    type: String
  }
});
module.exports = Movies = mongoose.model("movies", movieSchema);

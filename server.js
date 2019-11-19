const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
app.use(express.json("extend:false"));

app.get("/", (req, res) => res.send("API Running"));
app.use("/api/movies", require("./routers/api/movies"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

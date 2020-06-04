const express = require("express");
const routes = require("./routes");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/test", (request, response) => {
  response.json({ "test": "value" });
})

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/portionCrushDB"
);

console.log(`! MONGO, online and listening`);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
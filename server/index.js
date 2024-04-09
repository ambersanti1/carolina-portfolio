const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const CV = require('.')
const path = require('path')

const app = express();
app.use(express.json());
// app.use(express.static(path.join(__dirname + "/public")));
if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.use(
  cors({
    origin: [
    "http://localhost:3000",
    "https://carolina-portfolio-3706c48e8bfe.herokuapp.com",
    "https://www.amberly.dev"],
    credentials: true,
  })
);
app.use("/api", contactRoutes);

const port = process.env.PORT ||5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

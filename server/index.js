const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const CV = require('.')
const path = require('path')

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));
app.use(
  cors({
    origin: [
    "http://localhost:3000",
    "https://carolina-portfolio-3706c48e8bfe.herokuapp.com"],
    credentials: true,
  })
);
app.use("/api", contactRoutes);

const port = process.env.PORT ||5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

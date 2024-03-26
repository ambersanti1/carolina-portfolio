const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const CV = require('.')

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
    "http://localhost:3000",
    "https://carolina-portfolio-3706c48e8bfe.herokuapp.com"],
    credentials: true,
  })
);
app.use("/api", contactRoutes);
app
const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

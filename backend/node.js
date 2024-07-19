// backend 
const dotenv = require("dotenv")
dotenv.config();
const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
const path = require("path");
const PORT = process.env.PORT ;

const app = express();

app.use(cors());
app.use('/api', dataRoutes);
// ....................deployment..................


// const __dirname1 = path.resolve();
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}



//running the server
app.listen(PORT, () => {
    console.log(`Server is running on http://loacalhost:${PORT}`);
  });
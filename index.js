const chalk = require("chalk");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();


const flowers = require('./routes/api/flowers');


app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(chalk.bgBlueBright("MongoDB successfully connected")))
  .catch(err => console.log(err));


app.use("/api", flowers);


const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log(chalk.bgGreenBright(`Server up and running on port ${port}`)));

process.once('SIGUSR2', function () {
  server.close(function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})

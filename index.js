const chalk = require("chalk");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

// const Flower = require('./models/Flower');

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


app.get('/', (req, res) => {
    res.send('Hi I am a server and I have been setup')
})

app.use("/api", flowers);

// const blueFlower = new Flower({ name: 'Blue Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581047071/Vention/blue-flower_ibrc8n.png',
// price: 8000,
// rating: 4 });

// // Save the new model instance, passing a callback
// blueFlower.save(function (err, flower) {
//   if (err) return handleError(err);
//   console.log(`${flower.name} saved to collection`);
// });

const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log(chalk.bgGreenBright(`Server up and running on port ${port}`)));

process.once('SIGUSR2', function () {
  server.close(function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})

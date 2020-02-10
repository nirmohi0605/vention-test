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

// const pinkFlower = new Flower({ name: 'Pink Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581047062/Vention/pink-flower_tdevsf.png',
// price: 4000,
// rating: 5 });

// // Save the new model instance, passing a callback
// pinkFlower.save(function (err, flower) {
//   if (err) return handleError(err);
//   console.log(`${flower.name} saved to collection`);
// });

// const orangeFlower = new Flower({ name: 'Orange Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581047065/Vention/orange-flower_g3ahxd.png',
// price: 1760,
// rating: 3 });

// // Save the new model instance, passing a callback
// orangeFlower.save(function (err, flower) {
//   if (err) return handleError(err);
//   console.log(`${flower.name} saved to collection`);
// });
// const violetFlower = new Flower({ name: 'Violet Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581274716/Vention/Vention_purple-flower_ouuawb-e_bgremoval_hnaase.jpg',
// price: 2090,
// rating: 2 });

// // Save the new model instance, passing a callback
// violetFlower.save(function (err, flower) {
//   if (err) return handleError(err);
//   console.log(`${flower.name} saved to collection`);
// });

// const redFlower = new Flower({ name: 'Red Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581274461/Vention/Vention_red-flower_arevam-e_make_transparent_10_jhgdmx.jpg',
// price: 9800,
// rating: 4 });

// // Save the new model instance, passing a callback
// redFlower.save(function (err, flower) {
//   if (err) return handleError(err);
//   console.log(`${flower.name} saved to collection`);
// });

// const yellowFlower = new Flower({ name: 'Yellow Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581275077/Vention/Vention_yellow-flower_wfequz-c_scale_e_bgremoval_w_860_vfkh9j.png',
// price: 9000,
// rating: 5 });

// // Save the new model instance, passing a callback
// yellowFlower.save(function (err, flower) {
//   if (err) return handleError(err);
//   console.log(`${flower.name} saved to collection`);
// });


// const whiteFlower = new Flower({ name: 'White Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581274625/Vention/Vention_white_flower_nenga5-e_bgremoval_bxoygk.jpg',
// price: 2350,
// rating: 2 });

// // Save the new model instance, passing a callback
// whiteFlower.save(function (err, flower) {
//   if (err) return handleError(err);
//   console.log(`${flower.name} saved to collection`);
// });

// const peachFlower = new Flower({ name: 'Peach Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581273056/Vention/peach-flower_kg3ft7.png',
// price: 8050,
// rating: 5 });

// // Save the new model instance, passing a callback
// peachFlower.save(function (err, flower) {
//   if (err) return handleError(err);
//   console.log(`${flower.name} saved to collection`);
// });

// const taffyFlower = new Flower({ name: 'Taffy Flower', 
// imageURL: 'https://res.cloudinary.com/dmqiiomnm/image/upload/v1581274319/Vention/Vention_taffy-flower_zxcwsu-e_make_transparent_10_wkr0yb.jpg',
// price: 7050,
// rating: 5 });

// // Save the new model instance, passing a callback
// taffyFlower.save(function (err, flower) {
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

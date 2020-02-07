const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FlowerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageURL : {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  }, 
  rating: {
      type: Number, 
      required: true
  }

});


module.exports = Flower = mongoose.model("flowers", FlowerSchema);

const { Schema, model } = require('mongoose')

module.exports = model('Fit', Schema(
  {
    company: {
      type: String,
      required: [true, 'plz add company'],
    },
    material: {
      type: String,
      required: [true, 'plz add material'],
    },
    season: {
      type: String,
      required: [true, 'plz add season'],
    },
    style: {
      type: String,
      required: [true, 'plz add item name'],
    },
    imgurl: {
      type: String,
      required: [true, 'plz add image url'],
    },
  },
  {
    timestamps: true,
  },
))

/* eslint-disable sort-keys */
const mongoose = require('mongoose')
const { Schema } = mongoose
// const { ObjectId } = Schema.Types;

const AlbumSchema = Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  date: {
    type: Date,
  },
  copiesSold: {
    type: Number,
    validate: {
      validator: copiedSold => copiedSold > -1,
      message: `copiedSold must be > -1.`,
    },
    default: 0,
  },
  numberTracks: {
    type: Number,
    validate: {
      validator: numberTracks => numberTracks > 0,
      message: `numberTracks must be > 0.`,
    },
  },
  image: {
    type: String,
  },
  revenue: {
    type: Number,
    validate: {
      validator: revenue => revenue > -1,
      message: `revenue must be > -1.`,
    },
    default: 0,
  },
})

module.exports = AlbumSchema

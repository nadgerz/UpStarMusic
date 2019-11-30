/* eslint-disable sort-keys */
const mongoose = require('mongoose')
const { Schema } = mongoose
// const { ObjectId } = Schema.Types

const AlbumSchema = require('./album')

const MIN_NAME_LENGTH = 2

const ArtistSchema = Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length >= MIN_NAME_LENGTH,
      message: `Name must be longer than ${MIN_NAME_LENGTH - 1} characters.`,
    },
    required: [true, 'Name is required'],
  },
  age: {
    type: Number,
    validate: {
      validator: age => age > 0,
      message: `Age must be > 0.`,
    },
  },
  yearsActive: {
    type: Number,
    validate: {
      validator: age => age > 0,
      message: `Age must be > 0.`,
    },
  },
  image: {
    type: String,
  },
  genre: {
    type: String,
  },
  website: {
    type: String,
  },
  netWorth: {
    type: Number,
  },
  labelName: {
    type: String,
  },
  retired: {
    type: Boolean,
  },
  albums: [AlbumSchema],
})

/*
ArtistSchema.pre('deleteOne', { document: true, query: false }, function(next) {
  const Album = mongoose.model('album');

  Album.deleteMany({ _id: { $in: this.albums } }).then(() => next());
});
*/

module.exports = ArtistSchema

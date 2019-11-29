/* eslint-disable sort-keys */
const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const ArtistSchema = Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > MIN_NAME_LENGTH,
      message: `Name must be longer than ${MIN_NAME_LENGTH} characters.`,
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
  albums: [
    {
      type: ObjectId,
      ref: 'album',
    },
  ],
})

// eslint-disable-next-line prefer-arrow-callback
// ArtistSchema.virtual('postCount').get(function() {
//   return this.posts.length
// })

ArtistSchema.pre('deleteOne', { document: true, query: false }, function(next) {
  const Album = mongoose.model('album')

  Album.deleteMany({ _id: { $in: this.albums } }).then(() => next())
})

module.exports = ArtistSchema

const mongoose = require('mongoose')

const ArtistSchema = require('../schemas/artist')

module.exports = ArtistModel = mongoose.model('artist', ArtistSchema)

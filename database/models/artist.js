/* eslint-disable sort-keys */
const mongoose = require('mongoose')

const ArtistSchema = require('../schemas/artist')

const ArtistModel = mongoose.model('artist', ArtistSchema)

module.exports = ArtistModel

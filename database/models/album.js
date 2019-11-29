const mongoose = require('mongoose')

const AlbumSchema = require('../schemas/artist')

module.exports = AlbumModel = mongoose.model('album', AlbumSchema)

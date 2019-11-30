/* eslint-disable sort-keys */
const mongoose = require('mongoose')

const AlbumSchema = require('../schemas/album')

const AlbumModel = mongoose.model('album', AlbumSchema)

module.exports = AlbumModel

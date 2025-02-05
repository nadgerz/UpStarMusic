/* eslint-disable id-length */
const Mongo = require('mongodb')

const { Db, Server } = Mongo

const DEFAULT_PORT = 27017

const db = new Db('artists', new Server('localhost', DEFAULT_PORT))

db.open().then(() => {
  db.command({
    collMod: 'artists',
    validator: {
      $and: [
        { age: { $gte: 15, $lte: 45, $type: 'number' } },
        { yearsActive: { $gte: 0, $lte: 15, $type: 'number' } },
        { name: { $type: 'string' } },
        { genre: { $type: 'string' } },
      ],
    },
  })
    .then(() => {
      console.log('Mod Success')
      process.exit(0)
    })
    .catch(e => {
      console.log('Mod Failed', e)
      process.exit(1)
    })
})

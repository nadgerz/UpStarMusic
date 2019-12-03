import 'core-js/stable'
import 'regenerator-runtime/runtime'

const Artist = require('../models/artist')

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
const promise = (order = 1) => {
  const promise = Artist.find({})
    .sort({ age: order })
    .limit(1)
    .then(artists => artists[0].age)

  return promise
}

module.exports = async () => {
  const minPromise = promise()
  const maxPromise = promise(-1)

  return Promise.all([minPromise, maxPromise]).then(data => {
    const [min, max] = data

    return {
      min,
      max,
    }
  })
}

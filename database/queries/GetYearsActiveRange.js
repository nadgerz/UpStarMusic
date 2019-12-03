import 'core-js/stable'
import 'regenerator-runtime/runtime'

const Artist = require('../models/artist')

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
const promise = (order = 1) => {
  const promise = Artist.find({})
    .sort({ yearsActive: order })
    .limit(1)
    .then(artists => artists[0].yearsActive)

  return promise
}

module.exports = async () => {
  // const minPromise = promise()
  // const maxPromise = promise(-1)

  return Promise.all([promise(), promise(-1)]).then(data => {
    const [min, max] = data

    return {
      min,
      max,
    }
  })
}

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
  let minPromise = Artist.find({})
    .sort({ yearsActive: 1 })
    .limit(1)
    .then(artists => artists[0].yearsActive)

  minPromise = promise()

  let maxPromise = Artist.find({})
    .sort({ yearsActive: -1 })
    .limit(1)
    .then(artists => artists[0].yearsActive)

  maxPromise = promise(-1)

  return Promise.all([minPromise, maxPromise]).then(data => {
    console.log(data)

    const minMaxYearsActive = {
      min: data[0],
      max: data[1],
    }

    return minMaxYearsActive
  })
}

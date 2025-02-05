import 'core-js/stable'
import 'regenerator-runtime/runtime'

const Artist = require('../models/artist')

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
const promise = (order = 1) => {
  return Artist.find({})
    .sort({ yearsActive: order })
    .limit(1)
    .then(artists => artists[0].yearsActive)
}

const getYearsActiveRange = async () => {
  const min = await promise()
  const max = await promise(-1)

  return {
    min,
    max,
  }
}

module.exports = () => getYearsActiveRange()

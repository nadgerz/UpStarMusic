import 'core-js/stable'
import 'regenerator-runtime/runtime'

const Artist = require('../models/artist')

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
const promise = (order = 1) => {
  return Artist.find({})
    .sort({ age: order })
    .limit(1)
    .then(artists => artists[0].age)
}

const getAgeRange = async () => {
  const min = await promise()
  const max = await promise(-1)

  return {
    min,
    max,
  }
}

module.exports = () => getAgeRange()

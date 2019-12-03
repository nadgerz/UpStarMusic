import 'core-js/stable'
import 'regenerator-runtime/runtime'

const Artist = require('../models/artist')

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
const QueryOrder = {
  ASC: 1,
  DESC: -1,
}

const query = (order = QueryOrder.ASC) => {
  return Artist.find({})
    .sort({ age: order })
    .limit(1)
    .then(artists => artists[0].age)
}

const getMinMax = async () => {
  const min = await query()
  const max = await query(QueryOrder.DESC)

  return {
    min,
    max,
  }
}

const getAgeRange = getMinMax

module.exports = () => getAgeRange()

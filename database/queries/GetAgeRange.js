const getMinMax = require('./MaxMin')
const Model = require('../models/artist')

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
Promise.all([getMinMax(Model, 'yearsActive')]).then(wtf => {
  console.log(wtf)
})

module.exports = () => getMinMax(Model, 'age')

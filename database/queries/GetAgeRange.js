import 'core-js/stable'
import 'regenerator-runtime/runtime'

const Artist = require('../models/artist')

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = async () => {
  /*
  const minModel = await Artist.find({})
    .sort({ age: 1 })
    .limit(1)
  console.log(minModel)
  const min = minModel[0].age

  const maxModel = await Artist.find({})
    .sort({ age: -1 })
    .limit(1)
  console.log(maxModel)
  const max = maxModel[0].age

  console.log(min)
  console.log(max)
  */

  const minPromise = Artist.find({})
    .sort({ age: 1 })
    .limit(1)
    .then(artists => artists[0].age)

  const maxPromise = Artist.find({})
    .sort({ age: -1 })
    .limit(1)
    .then(artists => artists[0].age)

  return Promise.all([minPromise, maxPromise]).then(data => {
    console.log(data)

    const minMaxAge = {
      min: data[0][0].age,
      max: data[1][0].age,
    }

    // console.log(minMaxAge)

    return minMaxAge
  })
}

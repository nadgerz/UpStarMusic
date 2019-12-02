import 'core-js/stable'
import 'regenerator-runtime/runtime'

const Artist = require('../models/artist')

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = async () => {
  // const artists = await Artist.find( {}).sort( {yearsActive: 1} )
  // console.log( artists )

  const minModel = await Artist.find({})
    .sort({ yearsActive: 1 })
    .limit(1)
  console.log(minModel)
  const min = minModel[0].yearsActive

  const maxModel = await Artist.find({})
    .sort({ yearsActive: -1 })
    .limit(1)
  console.log(maxModel)
  const max = maxModel[0].yearsActive

  console.log(min)
  console.log(max)

  /*
	return new Promise().then(() => {
		resolve( { min: 0, max: 14 } )
	})
	*/
}

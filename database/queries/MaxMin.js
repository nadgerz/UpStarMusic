import 'core-js/stable'
import 'regenerator-runtime/runtime'

const QueryOrder = {
  ASC: 1,
  DESC: -1,
}

const query = (model, field, order = QueryOrder.ASC) => {
  return model
    .find({})
    .sort({ [field]: order })
    .limit(1)
    .then(records => records[0][field])
}

const getMinMax = async (model, field) => {
  const min = await query(model, field, QueryOrder.ASC)
  const max = await query(model, field, QueryOrder.DESC)

  return {
    min,
    max,
  }
}

module.exports = getMinMax

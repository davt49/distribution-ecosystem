const Glossary = require('../models/glossary')

function indexRoute(req, res, next){
  Glossary
    .find()
    .then(glossaries => {
      if (!glossaries) throw new Error('Not Found')
      return res.status(200).json(glossaries)
    })
    .catch(next)
}

module.exports = {
  index: indexRoute
}

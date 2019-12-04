const router = require('express').Router()
const glossaries = require('../controllers/glossaries')

router.route('/glossaries')
  .get(glossaries.index)


router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Route Not Found' }))

module.exports = router

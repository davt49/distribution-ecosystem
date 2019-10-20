const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/distribution-ecosystem'

module.exports = { port, dbURI}

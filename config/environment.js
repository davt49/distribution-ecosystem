const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/distribution-ecosystem${process.env.NODE_ENV || 'dev'}`

module.exports = { port, dbURI }

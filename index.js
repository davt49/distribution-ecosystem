const express = require('express')
const { port, dbURI } = require('./config/environment')
const bodyParser = require('body-parser')
const router = require('./config/router')
const mongoose = require('mongoose')
const logger = require('./lib/logger')

const app = express()

//Moved to environment.js
// const PORT = process.env.PORT || 8000
// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/distribution-ecosystem'

mongoose.connect(dbURI, { useNewUrlParser: true }, () => console.log(dbURI))

app.use(bodyParser.json())

app.use('/api', router)

app.use(logger)

app.listen(port, () => console.log(`up and running on PORT ${port}`))

module.exports = app

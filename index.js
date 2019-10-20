const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Moved to environment.js
// const PORT = process.env.PORT || 8000
// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/distribution-ecosystem'
const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI)

app.listen(port, () => console.log(`up and running on PORT ${port}`))

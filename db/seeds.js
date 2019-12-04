const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')

const Glossary = require('../models/glossary')

mongoose.connect(dbURI, (err, db) => {

  if (err) console.log(err)

  db.dropDatabase()

  Glossary.create([{
    name: 'TVOD',
    info: 'TVOD covers electronic sell-through (EST) and download-to-rent (DTR). Electronic sell-through is the digital sale of a film or television program for unlimited viewing via the internet, mobile or cable for a transactional fee. Download-to-rent is the digital rental of a film or television program that can be viewed for a limited time via the internet, mobile or cable for a transactional fee. Pay-Per-View is also an alternative name for TVOD. Examples: Apple iTunes, Sky Store, Microsoft Xbox, Amazon'
  }, {
    name: 'SVOD',
    info: 'SVOD allows for the digital access to a platform’s film and television library in exchange for a monthly subscription fee. Examples: Netflix, Amazon Prime Video, Hulu, HBO Now, Vimeo'
  }, {
    name: 'CVOD',
    info: 'Cable VOD is video on demand services established by cable operators and television studios. They allow the digital access to a program\'s library of the cable operator and television studio, usually in conjunction with access to their cable/television channel or charged in subscription fees. Examples: BBC iplayer, BT TV, Sky TV on Demand, HBO'
  }, {
    name: 'AVOD',
    info: 'AVOD are platforms where viewers can access content for free, but on occasion, an advertisement will play within the content. A portion of the ad revenue will be returned to the content provider. Examples: Youtube'
  }, {
    name: 'PVOD',
    info: 'PVOD are usually owned by studios as a platform to show their newest releases. However establishing a premium-VOD service will threaten the theatrical chains, and at present major studios are reluctant to change their relationship with their exhibition partners.'
  }, {
    name: 'OTT',
    info: 'OTT (Over the Top content) is a term used for the delivery of Film and TV content via the internet without requiring users to subscribe to a traditional cable channel or satellite pay-TV service. So it applies to tech inventions such as Netflix, Amazon, Youtube, Mubi, Vimeo etc.'
  }, {
    name: 'DRM',
    info: 'DRM (Digital Rights Management) refers to any system that limits access to digital content and allows the content provider to set and enforce terms in which consumers can use and access the content.'
  }])
    .then(glossaries => console.log(`${glossaries.length} glossaries created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})

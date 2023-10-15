const Property = require('../models/property-model')

const propertyCtlr = {}

propertyCtlr.createProperty = async (req, res) => {
  try {
    const body = req.body
    const coverPhoto = req.files.coverPhoto[0].filename
    const coverVideo = req.files.coverVideo[0].filename
    const otherPhotos = req.files.otherPhotos.map(file => file.filename)

    const property = new Property({...body,coverPhoto,coverVideo,otherPhotos})

    const propertyDoc = await property.save()
    res.status(201).json(propertyDoc)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}


// Get a list of properties
propertyCtlr.listAllProperties = async (req, res) => {
    try {
      const properties = await Property.find()
      res.status(200).json(properties)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}

module.exports = propertyCtlr



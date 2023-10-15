const express = require('express')
const cors = require('cors')

const app = express() 
app.use(express.json())
app.use(cors())

const morgan = require('morgan')

const upload = require('./app/middlewares/multer')

const propertyCtlr = require('./app/controllers/properties-ctlr')

require('dotenv').config()
const configureDB = require('./config/db')

// Use Morgan with a custom format
app.use(morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.status(req, res),
      tokens.url(req, res),
      JSON.stringify(req.params), // Log req.params as JSON
      JSON.stringify(req.body),   // Log req.body as JSON
      tokens['response-time'](req, res) + 'ms',
    ].join(' ')
}))
configureDB()

// Serve static files from the "public" directory
app.use(express.static('public'))

//Route for creating the property
app.post('/api/properties', upload.fields([
  { name: 'coverPhoto', maxCount: 1 },
  { name: 'coverVideo', maxCount: 1 },
  { name: 'otherPhotos', maxCount: 10 },
]),propertyCtlr.createProperty)

// Route for listing all the properties
app.get('/api/listProperties', propertyCtlr.listAllProperties)

const PORT = process.env.PORT || 3090
app.listen(PORT, ()=>{
    console.log('server is connecting on the PORT ', PORT)
})


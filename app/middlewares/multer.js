const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

// Set the storage engine for local storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/') // Define the destination directory where files will be stored
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const filename = uuidv4() + ext
    cb(null, filename) // Define the filename for the uploaded file
  },
})

// Create a Multer instance with the local storage configuration
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'video/mp4', 'video/quicktime']
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(null, false)
    }
  },
})

module.exports = upload

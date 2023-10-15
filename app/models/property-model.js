const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema({
    // Step 1: Add Property Information
    type :{
        type: String,
        required : true
    },
    propertyType :{
        type:String,
        required:true
    },
    ownerType :{
        type:String,
        required:true
    },
    possessionStatus : {
        type: String,
    },
    bhkType :{
        type : String,
        required:true
    },
    bathroom:{
        type : String,
        required : true
    },
    // Step 2: Property Details
    builderName :{
        type : String,
        required : true
    },
    monthlyRent :{
        type : Number,
        required : true
    },
    maintenanceCharges: {
        type :Number,
    },
    securityDeposit :{
        type : Number,
    },
    builtUpArea :{
        type : String,
        required : true
    },
    floors:{
        type:Number,
        required:true
    },
    availableFrom :{
        type : Date
    },
    ageOfProperty :{
        type : String
    },
    description : {
        type : String
    },
    // Step 3: Location
    address :{
        type : String,
        required : true
    },
    area :{
        type : String,
        required : true
    },
    // Step 4: Amenities
    amenities :{
        type:[String],
        required : true
    },
    // Step 5: Media
    coverPhoto  : {
        type : String,
    },
    coverVideo :{
        type : String
    },
    otherPhotos : {
        type : []
    }
})

const Property = mongoose.model('Property',propertySchema)
module.exports = Property



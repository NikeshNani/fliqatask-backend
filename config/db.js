const mongoose = require('mongoose')

const configureDB = async () => {
    try{
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/propertyManagement')
        console.log('connected to db')
    }catch(e){
        console.log('error connecting to db')
    }
}
module.exports = configureDB


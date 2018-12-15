var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id:{type: Number, required:true, unique:true},
    username:{type:String, required:true},    
    email:{type:String, required:true},
    address:{
        street:String,
        suite:String,
        city:String,
        zipcode:String,
        geo:{
            lat:Number,
            lng:Number
        }
    },
    phone:String,
    website:String,
    company:{
        name:String,
        catchPharse:String,
        bs:String
    }
})

module.exports = userSchema
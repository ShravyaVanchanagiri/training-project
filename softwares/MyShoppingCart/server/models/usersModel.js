/**
 * Created by shravya on 13/3/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
var userSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    mobile : {
        type : Number
    },
    isActive :{
        type: Boolean,
        default: false
    },
    addresses :[{
        type : SchemaTypes.ObjectId,
        ref : "addresses"
    }],
},
    {collection : 'users'}
);

var userModel = mongoose.model('user', userSchema);
module.exports=userModel;
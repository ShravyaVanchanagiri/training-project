/**
 * Created by shravya on 13/3/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
},
    {collection : 'users'}
);

var userModel = mongoose.model('user', userSchema);
module.exports=userModel;
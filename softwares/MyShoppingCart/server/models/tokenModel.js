/**
 * Created by shravya on 13/3/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tokenSchema = new Schema({
        token : {
            type : String
        },
        type : {
            type : String
        },
        email : {
            type : String
        },
        startDate : {
            type : Date
        },
        updatedDate : {
            type : Date
        },
    },
    {collection : 'tokens'}
);
var tokenModel = mongoose.model('token', tokenSchema);
module.exports=tokenModel;
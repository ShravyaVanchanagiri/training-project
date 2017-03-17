/**
 * Created by shravya on 17/3/17.
 */
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
var addressSchema=new Schema({
        type:{
            type :String,
            trim : true
        },
        addressLine1: {
            type: String,
            trim: true
        },
        addressLine2: {
            type: String,
            trim: true
        },
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        zip: {
            type: Number,
            trim: true
        }
    },
    {collection : 'addresses'}
);
var addressModel=mongoose.model('addresses',addressSchema);
module.exports=addressModel;
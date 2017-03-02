/**
 * Created by shravya on 1/3/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
        id:{
            type:String,
            trim:true,
            required: true
        },
        name:{
            type:String,
            trim:true,
            required: true
        },
        price:{
            type:Number,
            required: true
        },
        image:{
            filename: String,
            filetype: String,
            filesize:String,
            base64:String
        },
        description:{
            type:String,
            trim:true
        },
        type:{
            type:String,
            trim:true
        },
        subType:{
            type:String
        },
        brand:{
            type:String
        },
        RAM:{
            type:String
        },
        model:{
            type:String
        },
        color:{
            type:String
        },
        battery:{
            type:String
        },
        camera: {
            front:{
               type: String
            },
            rear:{
                type:String
            }
        },
        offers: {
            type:{
                type: String
            },
            percentage:{
                type: String
            }
        }
    },
    {collection:'products'}
);

var productModel = mongoose.model('product', productSchema);
module.exports=productModel;
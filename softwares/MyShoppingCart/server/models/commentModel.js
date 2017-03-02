/**
 * Created by shravya on 1/3/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new Schema({
        id:{
            type:Schema.Types.ObjectId,
            trim:true,
            required: true,
            ref : 'products'
        },
        username:{
            type:String,
            trim:true,
            required: true
        },
        rating:{

            type:Schema.Types.Double,
            trim:true,
            required: true
        },
        text:{
            type:String,
            required: true
        },
        commentedOn:{
            type:Date
        }
    },
    {collection:'comments'}
);
/*CommentSchema.plugin(mongoosePaginate);*/
var CommentModel = mongoose.model('Comment', CommentSchema);
module.exports=CommentModel;
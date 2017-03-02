/**
 * Created by shravya on 2/3/17.
 */
var productModel= require('../models/productModel');
//var commentModel= require('../models/commentModel');

var productRouter={
    listTopRatedProducts:function(req,res){
        console.log("getting");
        res.send('hi............................');
        productModel.find(function(err,result){
            if(res){
                res.send("....................."+result.length);
            }else{
                 res.send(err);
            }

        })
    },
}
module.exports=productRouter;


/*
topRatedProducts1: function(req,res){
    console.log('asd');
    products.aggregate([
        {$match : {"rating" :{$gt :4} } },
        {$group: {_id:"$subType", docs:{$push : "$$ROOT"}
        }},
        {$project : {
            docs : {$slice : ["$docs" ,0,5 ]}

        }
        }
    ]).exec(function (err, prods) {
        console.log(prods);
        if (err) {
            res.send(err);
        } else {
            res.send(prods);
            res.end();
        }
    });
},*/

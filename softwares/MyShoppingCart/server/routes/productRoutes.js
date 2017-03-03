/**
 * Created by shravya on 2/3/17.
 */
var productModel= require('../models/productModel');
//var commentModel= require('../models/commentModel');

var productRouter={
    listTopRatedProducts:function(req,res){
        console.log("getting");

        try {
            productModel.find({ratingProduct :{ '$gt' : 3}}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    console.log(products);
                    res.json({status:200, data:products})
                }
            }).limit(5);
        } catch(error) {
            console.log("Error...",error);
        }

    },
    listMobiles:function(req,res){
        console.log("getting");
        try {
            productModel.find({subType:"mobile"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    console.log(products);
                    res.json({status:200, data:products})
                }
            }).limit(5).pretty();
        } catch(error) {
            console.log("Error...",error);
        }
    },
    listLaptops:function(req,res){
        console.log("getting");
        try {
            productModel.find({subType:"laptop"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    console.log(products);
                    res.json({status:200, data:products})
                }
            }).limit(5).pretty();
        } catch(error) {
            console.log("Error...",error);
        }
    },
    listComics:function(req,res){
        console.log("getting");
        try {
            productModel.find({subType:"comic"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    console.log(products);
                    res.json({status:200, data:products})
                }
            }).limit(5).pretty();
        } catch(error) {
            console.log("Error...",error);
        }
    },
    listFictions:function(req,res){
        console.log("getting");
        try {
            productModel.find({subType:"fiction"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    console.log(products);
                    res.json({status:200, data:products})
                }
            }).limit(5).pretty();
        } catch(error) {
            console.log("Error...",error);
        }
    },
    displayEachProduct:function(req,res){
        try {
            productModel.find({subType:"fiction"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    console.log(products);
                    res.json({status:200, data:products})
                }
            }).limit(5).pretty();
        } catch(error) {
            console.log("Error...",error);
        }
    },
    searchProducts:function(req,res){
        var query = {};
        try {
            productModel.find(query, function (err, products) {
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    console.log(products);
                    res.json({status:200, data:products})
                }
            });
        } catch(error) {
            console.log("Error...",error);
        }

    },
    getProductsById:function(req,res) {
        var query = {};
        try {
            productModel.findOne({id:req.params.id}, function (err, product) {
                if (err) {
                    console.log("error");
                    res.send({status: 500})
                } else {
                    // object of rating gt 5
                    console.log(product);
                    res.json({status: 200, data: product})
                }
            });
        } catch (error) {
            console.log("Error...", error);
        }
    }
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

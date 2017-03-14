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

                    res.json({status:200, data:products})
                }
            }).limit(5);
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

                    res.json({status:200, data:products})
                }
            }).limit(5);
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

                    res.json({status:200, data:products})
                }
            }).limit(5);
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

                    res.json({status:200, data:products})
                }
            }).limit(5);
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

                    res.json({status:200, data:products})
                }
            }).limit(5);
        } catch(error) {
            console.log("Error...",error);
        }
    },
    displayMobiles:function(req,res){
        console.log("getting");
        try {
            productModel.find({subType:"mobile"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    res.json({status:200, data:products})
                }
            });
        } catch(error) {
            console.log("Error...",error);
        }
    },
    displayLaptops:function(req,res){
        console.log("getting");
        try {
            productModel.find({subType:"laptop"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    res.json({status:200, data:products})
                }
            });
        } catch(error) {
            console.log("Error...",error);
        }
    },
    displayComics:function(req,res){
        console.log("getting");
        try {
            productModel.find({subType:"comic"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    res.json({status:200, data:products})
                }
            });
        } catch(error) {
            console.log("Error...",error);
        }
    },
    displayFictions:function(req,res){
        console.log("getting");
        try {
            productModel.find({subType:"fiction"}, function (err, products) {
                console.log("inside function");
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    res.json({status:200, data:products})
                }
            });
        } catch(error) {
            console.log("Error...",error);
        }
    },
    displaySimilarProducts:function(req,res){
        console.log("inside function");
        //var queryParam = (req.query && req.query.q) ? JSON.parse(req.query.q) : req.body.q;
        var query= {subtype : req.query.subtype, brand:req.query.brand};
        try {
            productModel.find(query, function (err, products) {
                console.log("inside function");

                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
                    res.json({status:200, data:products})
                }
            });
        } catch(error) {
            console.log("Error...",error);
        }
    },
    searchProducts:function(req,res){
        var query = {};
        if(req.query.keyword){
            var regExp= new RegExp(req.query.keyword, "i");
            query.name=regExp;
        }else if(req.query.keyword===''){
            query.name='';
        }
        try {
            productModel.find(query, function (err, products) {
                if (err) {
                    console.log("error");
                    res.send({status:500})
                } else {
                    // object of rating gt 5
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
    },
    getFilteredMobile:function(req,res){
        console.log('req.query.')
        console.log(req.query)
        try {
            productModel.find({
                price: { $gt: req.query.minPrice, $lt: req.query.maxPrice },
                subType:req.query.subType,
                brand: {$in:req.query.brands}
            }, function (err, product) {
                if (err) {
                    console.log("error");
                    res.send({status: 500})
                } else {
                    // object of rating gt 5
                    res.json({status: 200, data: product})
                }
            });
        } catch (error) {
            console.log("Error...", error);
        }
    },
    getAllBrands:function(req,res) {
        var query = {subType: req.query.subType};
        console.log(req.query.subType);
        try {
             productModel.distinct('brand',query, function (err, products) {
                if (err) {
                    console.log("error");
                    res.send({status: 500})
                } else {
                    console.log(products);
                    res.json({status: 200, data: products})
                }
            });
        } catch (error) {
            console.log("Error...", error);
        }
    }
};
module.exports=productRouter;


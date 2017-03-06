/**
 * Created by shravya on 2/3/17.
 */
var mongoose = require('mongoose');
var fs = require('fs');
var productModel= require('../models/productModel');
var MongoClient = require('mongodb').MongoClient;
// Connect to the db
mongoose.connect('mongodb://127.0.0.1:27017/shopping_cart',function(error){
    if(!error){
        console.log("connection established...!");
    }
});

//var comments= require("../models/commentModel");
fs.readFile('../../client/app/module/mobileModule/Mobiles.json', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    if(data) {
        var prods = JSON.parse(data);
        console.log(prods.length);
        for(var i in prods){
            var prod = new productModel({
                id:prods[i].id,
                name:prods[i].name,
                price:prods[i].price,
                description:prods[i].description,
                image:prods[i].image,
                type:prods[i].type,
                brand:prods[i].brand,
                subType:prods[i].subType,
                by:prods[i].by,
                rating:prods[i].rating,
                RAM:prods[i].RAM,
                model:prods[i].modelName,
                color:prods[i].color,
                battery:prods[i].battery,
                ratingProduct:prods[i].ratingProduct,
                camera:prods[i].camera
            })
            prod.save(function (err) {
                if (err){
                   console.log("error");
                }
            })
        }

        productModel.find({}, function (err, products) {
            console.log("fIND ..inside function");
            if (err) {
                console.log("error");
            } else {
                // object of all the users
                console.log(products);
            }
        })
    }
});

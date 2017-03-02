var express = require('express');
var router = express.Router();
var path = require('path');
var productRotes= require('./productRoutes');
var router= function(app){
  app.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log("coming here");
    /*app.get('app/product/save',products.addProduct)*/
    res.render(path.join(__dirname, '../../client/app/index'));

  });
  app.get('/getProducts', productRotes.listTopRatedProducts);

}
/*var products=require('../../product');*/

/* GET home page. */


module.exports = router;

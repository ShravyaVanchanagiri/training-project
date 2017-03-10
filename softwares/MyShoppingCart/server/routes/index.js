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
  app.get('/topProducts', productRotes.listTopRatedProducts);
  app.get('/topMobiles', productRotes.listMobiles);
  app.get('/topLaptops',productRotes.listLaptops);
  app.get('/topComics',productRotes.listComics);
  app.get('/topFictions',productRotes.listFictions);
  app.get('/eachProduct',productRotes.displayEachProduct);
  //app.get('/products', productRotes.searchProducts);
  app.get('/getProducts/:id',productRotes.getProductsById);
  app.get('/similarProducts',productRotes.displaySimilarProducts);
  app.get('/mobiles',productRotes.displayMobiles);
  app.get('/laptops',productRotes.displayLaptops);
  app.get('/comics',productRotes.displayComics);
  app.get('/fictions',productRotes.displayFictions);
  app.get('/getFilteredMobile',productRotes.getFilteredMobile);
  app.get('/getAllNames',productRotes.searchProducts);
  app.get('/getAllBrandNames',productRotes.getAllBrands)

};
/*var products=require('../../product');*/

/* GET home page. */


module.exports = router;

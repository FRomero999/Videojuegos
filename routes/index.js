var express = require('express');
var router = express.Router();
var dataService = require("../data/dataService")


/* GET home page. */
router.get('/', function(req, res, next) {
  const items = dataService.findAllProductosLessThan(50);
  res.render('index', { productos : items });
});

router.get("/producto/:id",function(req,res,next){
   const item = ( dataService.findProductoById( req.params.id))
  res.json(producto)
});

router.get("/admin",function(req,res){
  res.render("admin",{})
});

module.exports = router;


var express = require('express');
var router = express.Router();
var dataService = require("../data/dataService");
const { get } = require('.');

/* GET home page. */
router.get('/', function(req, res, next) {
  const items = dataService.findAllProductosLessThan(50);
  res.render('index', { productos : items });
});

router.get("/producto/:pid",function(req,res,next){
  const item = ( dataService.findProductoById( req.params.pid))
  console.log(item)
  res.render('item',{ item: item })
});

/*
router.get("/admin/edit/:pid",function(req,res,next){
  const item = ( dataService.findProductoById( req.params.pid))
  console.log(item)
  res.render('edit-item',{ item: item })
});
*/

router.get("/admin/producto/:pid",function(req,res,next){
  const id = req.params.pid
  const option = req.query.operation
  if(dataService.deleteProductoById(id)){
    res.redirect("/admin")
  }
  else res.redirect("/admin")
  
});

/* router.post("/admin/producto/:pid/delete",function(req,res,next){
  const id = req.params.pid
  dataService.deleteProductoById(id)
  res.redirect("/admin")  
}); */


router.post("/admin/producto/delete",function(req,res,next){
  const id = req.body.id
  dataService.deleteProductoById(id)
  res.redirect("/admin")  
});


router.get("/admin",function(req,res){
  res.render("admin",{ productos : dataService.findAllProductos()})
});

module.exports = router;
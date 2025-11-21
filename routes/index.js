var express = require('express');
var router = express.Router();
var dataService = require("../data/dataService");
const { get } = require('.');

/* GET home page. */
router.get('/', function(req, res, next) {
  const items = dataService.findAllProductosLessThan(50)
  console.log(req.query)
  if(req.query.error!==undefined) {
    console.log("error")
    res.render('index', { productos : items, error : "El usuario no existe" });     
  } else{
    console.log("ok")
    res.render('index', { productos : items })
  }
});

router.get("/producto/:pid",function(req,res,next){
  const item = ( dataService.findProductoById( req.params.pid))
  console.log(item)
  res.render('item',{ item: item })
});

router.post("/admin/login",function(req,res,next){
  const username = req.body.username
  const password = req.body.password
  
  if( dataService.validateUser(username,password) ){
    req.session.isLogged = true;
    req.session.username = username;
    res.redirect("/admin")
  } else{
    res.redirect("/login")
  }
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
  if(req.session.isLogged){
    res.render("admin",{ username : req.session.username, productos : dataService.findAllProductos()})
  } else res.redirect("/login")
});

router.get("/login",function(req,res){
  res.render("login",{})
})

router.get("/admin/logout",function(req,res){
  req.session.destroy(()=>res.redirect("/"));
})


module.exports = router;
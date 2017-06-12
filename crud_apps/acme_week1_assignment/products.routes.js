const router = require('express').Router();
const Product = require('./product.model');

router.get('/', function(req,res,done) {
	res.render('products', {title: 'products', products : Product.getProducts() })
});

router.get('/add', function(req,res,done) {
	res.render('add', {title: 'add', products : Product})
});

router.post('/add/item', function(req,res,done){
	Product.add(req.body);
	res.redirect('/products');
});

router.delete('/delete/:id', function(req,res,done){
	Product.delete(req.params.id);
	res.redirect('/products');
});

router.get('/update/:productId/:productName', function(req, res, done){
	res.render('edit', {title: 'edit', item: {id: req.params.productId, name: req.params.productName}});
});	

router.put('/edit/:itemId', function(req,res,done){
	Product.editProduct(req.body, req.params.itemId);
	res.redirect('/products');
});

module.exports = router;
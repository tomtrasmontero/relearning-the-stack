const router = require('express').Router();
const Product = require('../product.model');

module.exports = router;

router.get('/', function(req, res, next){
	res.render('products', { title: 'Products', products: Product.list() });
});

router.post('/', function(req, res, next){
	Product.create(req.body);
	res.redirect('/products'); 
});

router.put('/:id', function(req, res, next){
	Product.update(req.params.id * 1, req.body);
	res.redirect('/products'); 
});

router.get('/add', function(req, res, next){
	res.render('add', { title: 'Add Product'});
});

router.delete('/:id', function(req, res, next){
	Product.destroy(req.params.id * 1);
	res.redirect('/products');
});

router.get('/:id/edit', function(req, res, next){
	let product = Product.findOne(req.params.id * 1);
	res.render('edit', { title: 'Edit Product', product: product});
});

let _products;
let seed = function(){
	_products = [
		{
			id:1,
			name: "Shoe"
		},
		{
			id:2,
			name: "Shower Head"
		}
	];
};

//load seeded data
seed();


exports = {
	resetSeed: () => seed(),
	getProducts: () => _products,
	add: function(item) {
		 _products.push({
			id: (_products[_products.length - 1].id + 1),
			name: item.product
		});
	},
	delete: function(id) {
		let idx = 0;
		
		_products.map(function (e,i,arr) {
			if(e.id === id){
				idx = i;
			}
		}); 
		_products.splice(idx,1);
	},
	getProduct: function(id){
		let productItem = _products.filter(function (e,i,arr){
			if(e.id === id) {
				return e;
			}
		});
		return productItem;
	},
	editProduct: function(product,id){
		_products.forEach(function (e,i,arr){
			if(e.id === id * 1){
				e.name = product.itemName;
			}
		});
	}
};


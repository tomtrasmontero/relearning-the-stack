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


module.exports = {
	resetSeed: () => seed(),
	getProducts: () => _products,
	add: (item) => _products.push({
		id: _products.length,
		name: item
	}),
	delete: function (id) {
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
	editProduct: function(name,id){
		_products.forEach(function (e,i,arr){
			if(e.id === id*1){
				e.name = name;
			}
		});
	}
};


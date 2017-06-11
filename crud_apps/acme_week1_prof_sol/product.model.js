let _products;

function seed(){
	_products = [
		{ id: 1, name: 'Foo'}, 
		{ id: 2, name: 'Bar'}, 
		{ id: 4, name: 'Baz'}
	];
}
//load seed data once;
seed();

module.exports = {
	reset: function(){
		seed();
	},
	list: function(){
		return _products;
	},
	findOne: function(id){
		return this.list().filter(function(product){
			return product.id === id;
		})[0];
	},
	destroy: function(id){
		let product = this.findOne(id);
		let idx = this.list().indexOf(product);
		this.list().splice(idx, 1);
	},
	update: function(id, attr){
		let product = this.findOne(id);
		product.name = attr.name;
	},
	create: function(attr){
		let max = this.list().reduce(function(memo,product){
			if(product.id > memo){
				memo = product.id;
			}
			return memo;
		},0);

		max++;
		this.list().push({ id: max, name: attr.name });
	}
};
let _trash = [
	{
		id: 3,
		name: 'An old sneaker'
	},
	{
		id: 5,
		name: 'treadmill'		
	}

];

module.exports = {
	getTrash: () => _trash,
	deleteTrash: function(id){
		let idxToDelete = 0;

		_trash.map( function(e,i,arr) {
			if(id === e.id){
				idxToDelete = i;
			}
		}); 
		
		_trash.splice(idxToDelete, 1);
	}
};
const fs = require('fs');

module.exports = {
	cat: function(start, args, next){
		let files = args.split(' ');
		let results = [];
		let counter = 0;
		function processFile(err,result,idx){
			if(err)
				return next('Error reading file ' + files[idx], null);
			results[idx] = result;
			counter++;

			if(counter === files.length) {
				let lines = results.reduce(function(memo, result){
					memo = memo.concat(result.split('\n'));
					return memo;
				}, []);
				next(null, lines.join('\n'));
			}
		}
		files.forEach(function(file, index){
			fs.readFile(file, function(err, result){
				if(err)
					return processFile(err, null, index);

				let data = result.toString().trim();
				processFile(null, data, index);
			});
		});

	},
	wc: function(start, args, next){
		let lines = start.trim().split('\n');
		next(null, lines.length);

	}
};
let fs = require('fs');

module.exports.pwd = function() {
	process.stdout.write(process.cwd());
}

module.exports.ls = function() {
	fs.readdir('.', function(err, files) {
		if (err) {
			throw err;
		}

		files.forEach(function(file) {
			process.stdout.write(file.toString() + '\n');
		})
		process.stdout.write('prompt > ');
	});
}

module.exports.echo = function(input, done) {
	done(input);
}

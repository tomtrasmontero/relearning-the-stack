let commands = require('./commands.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
	let cmd = data.toString().trim(); //remove the newline

	// process.stdout.write('You typed: ' + cmd);

	if (commands[cmd]){	
		commands[cmd]();
		process.stdout.write('\nprompt > ');
	} else {
		process.stdout.write('Command not Found ' + cmd);		
	}

});
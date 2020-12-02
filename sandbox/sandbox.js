const fsPromises = require('fs').promises;

fsPromises.readFile('./README.md', 'utf-8' 
).then(console.log);

// use fsPromises.readFile to read a file
// then console.log the file
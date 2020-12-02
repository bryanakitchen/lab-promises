const fsPromises = require('fs').promises;

fsPromises.readFile('./README.md', 'utf-8' 
).then(console.log);

fsPromises.writeFile('./READALSO.md', 'utf-8');
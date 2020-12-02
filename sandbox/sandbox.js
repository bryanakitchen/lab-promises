const fsPromises = require('fs').promises;

fsPromises.readFile('./README.md', 'utf-8' 
).then(console.log);

fsPromises.writeFile('./ReadTest.md', 'Copying over ReadTest').then(console.log);

// fsPromises.copyFile('./READALSO.md', './ReadCopy.md')
//     .then(() => console.log('READALSO.md was copied to ReadCopy.md'))
//     .catch(() => console.log('The file could not be copied.'));
const fsPromises = require('fs').promises;

function transform(src) {
    return fsPromises.readFile(src, 'utf-8')
        .then(data => {
            return data.toLowerCase();
        })
        .then(data => {
            return data.toUpperCase();
        })
        .then(data => {
            return data.split('').reverse().join('');
        })
}

transform('./testFile.txt').then(console.log);
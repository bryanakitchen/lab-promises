const fsPromises = require('fs').promises;

function transform(src) {
    return fsPromises.readFile(src, 'utf-8')
        .then(data => {
            return data.replace(/[^a-z\s]/g, '');
        })
        .then(data => {
            console.log(data);
            return data.toUpperCase();
        })
        .then(data => {
            return data.split('').reverse().join('');
        })
}

// transform('./testFile.txt').then(console.log);

module.exports = {
    transform
}
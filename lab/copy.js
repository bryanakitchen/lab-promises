const fsPromises = require('fs').promises;

function copy(src, dst) {
    return fsPromises.readFile(src, 'utf-8' 
        )
        .then(data => {
            fsPromises.writeFile(dst, data,'utf-8')
            console.log('Done!')
            }
        );        
}

module.exports = {
    copy
};
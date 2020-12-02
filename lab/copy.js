const fsPromises = require('fs').promises;

function copy(src, dst) {
    try {
        const data = fsPromises.readFile(src, 'utf-8' 
        ).then( 
            fsPromises.writeFile(dst, 'Copying over ReadTest - out of sandbox'),
            console.log('Done!'),
        );        
        
    } catch(err) {
        console.log(err);
    }
}

copy('./README.md', './ReadTest.md');
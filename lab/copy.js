const fsPromises = require('fs').promises;

async function copy(src, dst) {
    try {
        const data = await fsPromises.readFile(`${src}`, 'utf-8' 
        );
        console.log(data);
        
        await fsPromises.writeFile(`${dst}`, 'Copying over ReadTest - out of sandbox');
        console.log('Done!');
        
    } catch(err) {
        console.log(err);
    }
}

copy('./README.md', './ReadTest.md');
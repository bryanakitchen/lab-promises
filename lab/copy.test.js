const fsPromises = require('fs').promises;
const { copy } = require('./copy');

describe('Copy function', () => {
    
    afterEach(() => {
        return fsPromises.rm('./ReadTest.txt');
    });

    it('Takes a source file and copies to a destination', () => {
        return copy('./README.md', './ReadTest.txt')
        .then(() => {
            return fsPromises.readFile('./ReadTest.txt', 'utf-8')
            .then(data => {
                expect(data).toEqual(`This is a lab about Promises`);
            });
        });

    })
})
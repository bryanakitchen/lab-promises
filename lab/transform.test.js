const { transform } = require('./transform');

describe('Transform function', () => {
        
    it('Takes a source file and capitalizes and reverses the text', () => {
        return transform('./testFile.txt')
        .then(data => {
            expect(data).toEqual(`DLRO OLLE`)
        });

    })
})
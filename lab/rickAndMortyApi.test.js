const { getCharacter } = require('./rickAndMortyApi');

describe('getCharacter function', () => {
    it('Takes an ID and returns the character', async () => {
        const result = await getCharacter(2);

        expect(result).toEqual({
            name: "Morty Smith",
            status: "Alive",
            species: "Human"
        })
    })
})
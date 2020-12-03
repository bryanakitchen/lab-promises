const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');

describe('getCharacter function', () => {
    it('Takes an ID and returns the character', async () => {
        const result = await getCharacter(2);

        expect(result).toEqual({
            name: "Morty Smith",
            status: "Alive",
            species: "Human"
        })
    })

    it('Takes an array of ids and returns the array of characters', async () => {
        const characterArray = await getManyCharacters([2, 4, 6]);

        expect(characterArray).toEqual([
            {
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            },
            {
                name: "Beth Smith",
                status: "Alive",
                species: "Human"
            },
            {
                name: "Abadango Cluster Princess",
                status: "Alive",
                species: "Alien"
            }
        ])
    })
})
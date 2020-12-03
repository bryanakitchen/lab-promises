const fetch = require('node-fetch');
const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');
const mockSingleResponse = require('./api-results-single.json');
// const mockManyResponses = require('./api-results-array.json');

jest.mock('node-fetch');

describe('getCharacter function', () => {
    it('Takes an ID and returns the character', async () => {
        
        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockSingleResponse)
        });

        const result = await getCharacter(2);

        expect(result).toEqual({
            name: "Morty Smith",
            status: "Alive",
            species: "Human"
        })
    })

    it('Takes an array of ids and returns the array of characters', async () => {

        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockSingleResponse)
        });

        const characterArray = await getManyCharacters([2, 4, 6]);

        expect(characterArray).toEqual([
            {
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            },
            {
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            },
            {
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            }
        ])
    })
})
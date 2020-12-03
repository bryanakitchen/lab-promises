const fetch = require('node-fetch');

async function getCharacter(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const json = await res.json();
    const characterObject = {
        name: json.name,
        status: json.status,
        species: json.species
        };
    return characterObject;
}

const getManyCharacters = async (ids) => {
    const object = await Promise.all(ids.map(id => getCharacter(id)));
    return object;
}

// getCharacter(2);
// getManyCharacters([2, 4, 6]);

module.exports = {
    getCharacter, getManyCharacters
};
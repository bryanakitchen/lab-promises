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

// getCharacter(2);

module.exports = {
    getCharacter
};
const fetch = require('node-fetch');

function getCharacter(id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
        return res.json();
    })
    .then(json => {
        return {name: json.name,
        status: json.status,
        species: json.species
        }
    })
    .catch(err => {
        console.log(err);
        return err;
    })

}

// getCharacter(2);

module.exports = {
    getCharacter
};
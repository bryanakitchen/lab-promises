const fetch = require('node-fetch');

function nodeFetch() {
    return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(data => {
        return data.json();
    })
};

function nodeFetchCharacter() {
    return fetch('https://rickandmortyapi.com/api/character/')
    .then(data => {
        return data.json();
    })
};

function nodeFetchOrigin() {
    return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(({ results }) => {
        results.map(character => character.origin.url)
    })
    .then(originUrls => Promise.all(originUrls.filter(url => url).map(url => fetch(url.then(res => res.json())))))
    .then(origins => console.log(origins))
}

// nodeFetch().then(console.log);
// nodeFetchCharacter().then(console.log);
nodeFetchOrigin().then(console.log);
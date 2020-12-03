const fetch = require('node-fetch');

Promise.all([
    fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
])
    .then(data =>
        console.log(data))
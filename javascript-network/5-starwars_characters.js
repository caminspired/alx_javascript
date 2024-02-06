const req = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

req.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('error:', response.body);
        return;
    }

    const movie = JSON.parse(body);
    const characterNames = movie.characters;


    req.get(characterNames, (error, response, body) => {
        if (error) {
            console.error('error:', error);
            return;
        }

        if (response.statusCode !== 200) {
            console.error('error:', response.body);
            return;
        }

        const character = JSON.parse(body); 
        console.log(character.name);
    })
});

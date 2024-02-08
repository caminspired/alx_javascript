const req = require('request');

const characterId = '18';
const apiUrl = process.argv[2];

req.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('error:', response.body);
        return;
    }

    const count = 0;
    const movies = JSON.parse(body)
    movies.results.forEach((film) => {
        film.characters.forEach((character) => {
            if (character.includes(characterId)){
                count += 1;
            }
        })
    })
    console.log(count);
});

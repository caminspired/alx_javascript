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

    const movies = JSON.parse(body).results;
    const count = movies.filter(movie => movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length;
    console.log(count);
    
});

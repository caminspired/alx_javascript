const req = require('request');

const url = process.argv[2];

req.get(url, (error, response) => {
    if (error) {
        console.log('error: ', error);
        return;
    }

    console.log('code: ', response.statusCode);
})


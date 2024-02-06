const req = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

req.get(url, (error, response, body) => {
    if (error) {
        console.error('error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('error:', response.body);
        return;
    }

    fs.writeFile(filePath, body, {encoding: 'utf-8'}, (err) => {
        if (err) {
            console.error('Writing error:', err);
            return;
        }
    });
});

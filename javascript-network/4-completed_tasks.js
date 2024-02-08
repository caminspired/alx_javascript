const req = require('request');

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

    const tasks = JSON.parse(body);
    const completedTasks = {};

    tasks.forEach(task => {
        if (task.completed) {
            if (completedTasks[task.userId]) {
                completedTasks[task.userId]++;
            }
            else {
                completedTasks[task.userId] = 1;
            }
        }
    });

    console.log(completedTasks);
});

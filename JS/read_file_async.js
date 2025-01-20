const fs = require('fs');

// Asynchronous read
fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("An error occurred:", err);
        return;
    }
    console.log("File contents:", data);
});
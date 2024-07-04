const fs = require('fs');
const path = require('path');

// Encode the file path if it contains special characters
const encodedFilePath = encodeURIComponent(path.join(__dirname, 'data.json'));
const decodedFilePath = decodeURIComponent(encodedFilePath);

fs.readFile(decodedFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }
});

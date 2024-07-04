const fs = require('fs');
const path = require('path');

function parseLineToJson(line) {
    const jsonObject = {
      action: '',
      date: '',
      time: '',
      details: {
        message: ''
      }
    };
  
    // Adjusted regex to match the example line format
    const regex = /^(\d+)\) (\d{1,2} \w{3} '(\d{2})) (\d{2}:\d{2}) : (.*)$/;
    const match = line.match(regex);
  
    if (match) {
      jsonObject.action = match[1]; // Action number
      jsonObject.date = match[2]; // Date including the apostrophe and year
      jsonObject.time = match[4]; // Time
      jsonObject.details.message = match[5]; // The message
    } else {
      console.log("No match for line:", line); // Debugging line
    }
  
    return jsonObject;
  }

// Example usage
const filePath = path.join(__dirname, 'Transaction.txt');
const lines = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);
const jsonObjects = lines.map(parseLineToJson);

console.log(jsonObjects);

// Optionally, save the to a new JSON file
fs.writeFileSync(path.join(__dirname, 'Transactions.json'), JSON.stringify(jsonObjects, null, 2));
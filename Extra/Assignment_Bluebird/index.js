const fs = require('fs');
const Promise = require('bluebird');

// Convert fs.readFile to return a promise
const readFile = Promise.promisify(fs.readFile);

readFile('demo.txt', 'utf8')
  .then(data => {
    console.log('File Content:');
    console.log(data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });

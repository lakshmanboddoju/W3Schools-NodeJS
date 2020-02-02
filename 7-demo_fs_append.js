var fs = require('fs');

fs.appendFile('test-files\\7-mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

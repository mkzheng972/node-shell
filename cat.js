const fs = require('fs');

function cat(data) {

  // fs.readFile read entire file content
  fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

module.exports = () => {
  cat();
}

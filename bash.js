process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    const exportsFromFilePWD = require('./pwd');
    exportsFromFilePWD();
    process.stdout.write('\nprompt > ');
  } else if (cmd === 'ls') {
    const exportsFromFileLS = require('./ls');
    exportsFromFileLS();
  } else if (cmd === 'cat') {
    const exportsFromFileCat = require('./cat');
    exportsFromFileCat();
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
})

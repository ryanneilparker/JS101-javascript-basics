function stringFactory(char, length) {
  string = '';

  for (let i = 0; i < length; i ++) {
    string += char;
  }

  return string;
}

function log(message) {
  let width = message.length + 2;

  console.log('+' + stringFactory('-', width) + '+');
  console.log('|' + stringFactory(' ', width) + '|');
  console.log('| ' + message + ' |');
  console.log('|' + stringFactory(' ', width) + '|');
  console.log('+' + stringFactory('-', width) + '+');
}

log('To boldly go where no one has gone before.');
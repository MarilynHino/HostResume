const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../src');

sh.rm('-rf', `${destPath}/*`)


import path from 'path';
var conf = path.resolve(__dirname, 'conf.js');
const Launcher = require('protractor/built/launcher');
Launcher.init(conf);
console.log(Launcher);

/* import { spawn } from 'child_process';
var pro = spawn('protractor', paramsForProtractorSpawn);
  pro.stdout.on('data', (data) => {
    console.log('stdout: ' + data);
  }); */
import path from 'path';
var conf = path.resolve(__dirname, 'conf.js');
const Launcher = require('protractor/built/launcher');
Launcher.init(conf);
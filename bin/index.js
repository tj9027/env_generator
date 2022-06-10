#!/usr/bin/env node

const fs = require('fs');
const envList = require('../envList.json')
const yargs = require('yargs');


const options = yargs
  .usage("Usage : -p <path>")
  .option('p', {
    alias: 'path',
    describe: 'Config file_path',
    type: 'string',
    demandOption: true
  }).argv;

const configFile = fs.readFileSync(options.path).toString();

const requiredEnvs = configFile.match(/\b[A-Z_0-9]+\b/g);

const output = {

}

requiredEnvs.forEach((env) => {
  const found = envList[env];
  output[env] = found
})
const string = JSON.stringify(output, null, 2);
const validEnv = string
  .replace(/"/g, "")
  .replace(/: /g, '=')
  .replace(/,/g, '')
  .replace(/^\{/, '')
  .replace(/\}$/, '');

fs.writeFileSync('.env', validEnv)


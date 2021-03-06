#!/usr/bin/env node

const program = require('commander');

const packageJson = require('./package.json');

program
  .version(packageJson.version)
  .command('hello <names...>', 'says hello to people')
  .parse(process.argv);

#!/usr/bin/env node

const program = require('commander');

program
  .version(require('./package.json').version)
  .action(function () {
    console.log("Hello, World!");
  });

program.parse(process.argv);

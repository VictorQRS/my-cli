#!/usr/bin/env node

const program = require('commander');

program
  .version(require('./package.json').version)
  .arguments('<names...>')
  .action(function (names) {
    for (let i=0; i<names.length; ++i) {
      console.log("Hello, " + names[i] + "!");
    }
  });

program.parse(process.argv);

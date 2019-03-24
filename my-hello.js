#!/usr/bin/env node

const program = require('commander');

program.parse(process.argv);

const names = program.args;
for (let i = 0; i < names.length; ++i) {
  console.log("Hello, " + names[i] + "!");
}
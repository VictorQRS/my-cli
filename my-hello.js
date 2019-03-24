#!/usr/bin/env node

const program = require('commander');

program
  .option('-l, --lower', "only use lowercase letters")
  .option('-u, --upper', "only use uppercase letters")
  .parse(process.argv);

const names = program.args;
for (let i = 0; i < names.length; ++i) {
  const msg = "Hello, " + names[i] + "!";

  const { lower, upper } = program;

  if (lower && upper) console.log(msg);
  else if (lower)     console.log(msg.toLowerCase());
  else if (upper)     console.log(msg.toUpperCase());
}
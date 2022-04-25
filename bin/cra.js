#! /usr/bin/env node

"use strict"
const { program } = require('commander');

console.log("hello");
program
  .option('--first')
  .option('-s,--separator <char>');

program.command("create <app-name>")
  .description("create a new react project")
  .action((source, destination) => {
    console.log("source:", source,
      "\n", "destination:", destination);
  })

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(limit, options);
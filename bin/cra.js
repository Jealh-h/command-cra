#! /usr/bin/env node

"use strict"
const { program } = require('commander');
const createReactApp = require('../lib/create.js');
const pkgJSON = require('../package.json');

program.version(`command-cra: v${pkgJSON.version}`, '-v,--version')

program.command("create <app-name>")
  .description("create a new react project")
  .action((source, destination) => {
    createReactApp(source, destination);
  })

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(limit, options);
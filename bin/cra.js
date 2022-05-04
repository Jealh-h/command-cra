#! /usr/bin/env node

"use strict"
const { program } = require('commander');
const createReactApp = require('../lib/create.js');
const cra = require('../lib/cra.js');
const pkgJSON = require('../package.json');

program.version(`command-cra: v${pkgJSON.version}`, '-v,--version')

// 
program.argument("<app-name>")
  .option("-t,--template <templateName>", 'use template to CRA')
  .description("use create-react-app create a app")
  .action((appName, options) => {
    cra(appName, options);
  })

program.command("create <app-name>")
  .description("create a new react project")
  .action((source, destination) => {
    createReactApp(source, destination);
  })

program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(limit, options);
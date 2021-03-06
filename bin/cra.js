#! /usr/bin/env node

"use strict"
import { program } from 'commander';
import createReactApp from '../lib/create.js';
import cra from '../lib/cra.js';
// import pkgJSON from '../package.json' assert { type: 'json' };
// const pkgJSON = require('../package.json')
import { readFile } from 'fs/promises';
const pkgJSON = JSON.parse(
  await readFile(
    new URL('../package.json', import.meta.url)
  )
);

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
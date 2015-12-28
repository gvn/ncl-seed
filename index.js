#!/usr/bin/env node

// For parsing options – https://github.com/tj/commander.js
var program = require('commander');

// For portable shell commands – https://github.com/shelljs/shelljs
var shell = require('shelljs');

// For runtime interactions – https://github.com/SBoudrias/Inquirer.js
var inquirer = require('inquirer');

// For pretty colors – https://github.com/chalk/chalk
var chalk = require('chalk');

program
  .version('1.0.0')
  .usage(`USAGE_INFO_HERE`)
  .option('-n, --name [name]', 'Display name', 'Bob')
  .parse(process.argv);

shell.echo(chalk.green(`Hello, ${program.name}`));

var app = require('./app');
var yargs = require('yargs');

var flags = yargs.usage('$0: Usage node cli.js')
  .options('h', {
    alias: 'help',
    describe: 'Display help'
  })
  .options('m', {
    alias: 'math',
    describe: 'Get a Math fact',
    //type: 'array'
  })
  .options('t', {
    alias: 'trivia',
    describe: 'Get a trivia fact'
  })
  .options('d', {
    alias: 'date',
    describe: 'Get a date or year fact'
  })
  .options('s', {
    alias: 'save',
    describe: 'Save fact as JSON objects'
  })
  .argv;

if (flags.help) {
  yargs.showHelp();
} else {
  app.run(flags);
}
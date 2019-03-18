/* TODO:
- add/update/remove:
  - books
  - links
  - clients
  - awards
  - charities
  - events
*/
const inquirer = require('inquirer')
const low = require('lowdb')
const data = require('../data/data.json')
const db = low()
db.setState(data)

const argv = require('yargs')
  .options({
    'add': {
      alias: 'a',
      describe: 'add a new item'
    }
  })
  .argv
const questions = [
  {
    name: 'id',
    message: 'What\'s the id?'
  },
  {
    name: 'name',
    message: 'What\'s the name?'
  },
  {
    name: 'author',
    message: 'Whos\'s the author?'
  },
  {
    name: 'url',
    message: 'What\'s the url?'
  }
]

if (argv.add) {
  // console.log(db.getState())
  inquirer.prompt([questions]).then(answers => {})
}

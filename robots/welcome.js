let figlet = require('figlet');
let chalk = require('chalk')

function robot(){
  
  function welcome(){
    var msg = figlet.textSync('Create Widget Wizard')
    console.log( chalk.green(msg));
    console.log( chalk.green('Welcome Create Widget Wizard!!'));
    console.log( chalk.green('Dev:  Crisciano S. Botelho'));
    
  }

  welcome();
}

module.exports = robot
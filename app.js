const inquirer = require('inquirer')

//   //initiats FS a module in node.JS
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHtml = generatePage(name,github)

//   //arguement functions for writeFile are name of file being created,data that will write into file,callback function used for error handling 
// fs.writeFile('index.html',pageHtml,err => {
//   if (err) throw err
//   console.log('Portfolio complete! check out index.html to see output')
// })



//mesage is question, Name is answer label 
inquirer
  .prompt([
    {
      type: 'input',
      //Name: + user answer
      name: 'Name',
      //question
      message: 'What is your name'
    }
  ])
    .then(answers => console.log(answers))
//initiats FS a module in node.JS
const fs = require('fs');
const generatePage = require('./src/page-template.js');
//holds user command-line arguements
const profileDataArgs = process.argv.slice(2)
//variables for extracted args
const [name, github] = profileDataArgs;
  //arguement functions for writeFile are name of file being created,data that will write into file,callback function used for error handling 
fs.writeFile('index.html',generatePage(name,github),err=> {
  if (err) throw new Error(err)
  console.log('Portfolio complete! check out index.html to see output')
})
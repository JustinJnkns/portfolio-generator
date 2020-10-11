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


const promptProject = portfolioData => {
        //if no 'projects' array property, create one
        if (!portfolioData.projects) {
            portfolioData.projects = []
        }
        console.log('ADD A NEW PROJECT')
        return inquirer.prompt([{
                    type: 'input',
                    name: 'name',
                    message: 'what is the name of your project(Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter your name!')
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Provide a description for the project(Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter A description for your project')
                            return false
                        }
                    }
                },
                {
                    type: 'checkbox',
                    name: 'languages',
                    message: 'What did you build this project with?(check all that apply)',
                    choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Boostrap']
                },
                {
                    type: 'input',
                    name: 'link',
                    message: 'Enter link to Github Project. (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter link to Github Project')
                            return false
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'feature',
                    message: 'Would you like to feature this project?',
                    default: false
                },
                {
                    type: 'confirm',
                    name: 'confirmAddProject',
                    message: 'Would you like to enter another project?',
                    default: false
                }
            ])
            //adds project data to projects array
            .then(projectData => {
                portfolioData.projects.push(projectData)
                    //if user confirms addProject  calls the promptproject function 
                if (projectData.confirmAddProject) {
                    return promptProject(portfolioData)
                }
                //if user decides not to it evalutes to be false and returns portfolioData,important to return to retrieve users answers
                else {
                    return portfolioData
                }
            })
    }
    //mesage is question, Name is answer label 
const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            //Name: + user answer
            name: 'Name',
            //question
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter your name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter your Github name!')
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'would you like to enter some information about yourself for a "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself'
        }
    ])
}
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData)
    })
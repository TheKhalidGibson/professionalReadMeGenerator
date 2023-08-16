import inquirer from "inquirer";
import fs from "fs/promises";


let {description, tableofcontents, installation, usage, liscense, contributing, tests, questions} = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'description',
        message: "Write a detailed description of your project",
      },
      {
        type: 'list',
        name: 'tableofcontents',
        message: 'What section of the README would you like to be directed to?',
        choices: ['#description', '#tableofcontents', '#installation', '#usage', '#liscense', '#contributing','#tests', '#questions'],
      },    
      {
        type: 'input',
        name: 'installation',
        message: "What are the steps to install your project? Please provide step by step instructions",
      },
      {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use. Include screenshots as needed",
      },
      {
        type: 'list',
        name: 'liscense',
        message: 'What kind of liscense do you need?',
        choices: ['Apache', 'Boost', 'BSD'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Can anyone add a contribution to your code? Via pull requests? Please provide guidelines for user contributions',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Will the there be an required tests? If not is it possible to go above and beyond to write tests? If so provide examples on how to run them here?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please provide the user with a method of preferred method of communication to use for any questions they may have.',
      },      

    ])

    let readmeText = `# Project Description
                      ${description}


                      ## A second-level heading
                      ${tableofcontents}


                      ## A second-level heading
                      ${installation}
                      
                      
                      ## A second-level heading
                      ${usage}


                      ## A second-level heading

                      ${generateLiscense(liscense)}
                      
                      
                      ## A second-level heading

                      ${contributing}
                      
                      
                      ## A second-level heading

                      
                      ${tests}
                      
                      
                      ## A second-level heading

                      ${questions}

                      ### A third-level heading
                      
                      
                      `


    fs.writeFile("README.md", readmeText)
    console.log(description);

    function generateLiscense(liscense){

      if(liscense === "Apache"){

        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

      }
      else if(liscense === "Boost"){

        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"

      }
      else(liscense === "BSD"){ 

        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"

      }

         return``
    }
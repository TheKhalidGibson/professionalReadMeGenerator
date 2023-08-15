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
        name: 'liscense',
        message: 'What kind of liscense do you need?',
        choices: ['Apache', 'Boost', 'BSD'],
        filter(val) {
          return val.toLowerCase();
        },
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

                      ${generateLiscense(contributing)}
                      
                      
                      ## A second-level heading

                      
                      ${generateLiscense(tests)}
                      
                      
                      ## A second-level heading

                      ${generateLiscense(questions)}

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
import inquirer from "inquirer";
import fs from "fs/promises";


let {description, tableofcontents, installation, usage, license, contributing, tests, questions} = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'description',
        message: "Write a detailed description of your project",
      },
      {
        type: 'input',
        name: 'tableofcontents',
        message: 'Enter the links to the table of contents. Make sure to put the section heading in square brackets [heading] and link each section with a hashtag and heading inside parenthesis (#heading) or an external link (url) inside parenthesis',
        // choices: ['description', 'tableofcontents', 'installation', 'usage', 'license', 'contributing','tests', 'questions'],
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
        name: 'license',
        message: 'What kind of license do you need?',
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

    let readmeText = 
`# Project Description
${description}


## Table of Contents
${tableofcontents}


## Installation
${installation}
                      
                      
## Usage
${usage}


## License

${generateLicense(license)}
                      
                      
## Contributing

${contributing}
                      
                      
## Tests

                      
${tests}
                      
                      
## Questions

${questions}



`


    fs.writeFile("README.md", readmeText)
    console.log(description);

    function generateLicense(license){

      if(lisense === "Apache"){

        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

      }
      else if(license === "Boost"){

        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"

      }
      else if(license === "BSD"){

        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"

      }

        //  return``
    }


    //The below is code for if the table of contents were to be a list instead of just hyperlinks
    //Would need to change the prompt type to a list instead of input and provide choices
    //Maybe add an event listener? 

    // function navigateToc(tableofcontents) {
    //   if (tableofcontents === "description") {

    //     return [description](#description)

    //   }
    //   else if (tableofcontents === "tableofcontents") {

          //  return [tableofcontents](#tableofcontents)
        
    //   }
    //   else if (tableofcontents === "installation") {
      
          //  return [installation](#installation)

    //   }
    //   else if (tableofcontents === "usage") {

        //  return [usage](#usage)
        
    //   }
    //   else if (tableofcontents === "license") {

         //  return [license](#license)
        
    //   }
    //   else if (tableofcontents === "contributing") {

         //  return [contributing](#contributing)
        
    //   }
    //   else if (tableofcontents === "tests") {

         //  return [tests](#tests)
        
    //   }
    //   else if (tableofcontents === "questions") {
        
        //  return [questions](#questions)

    //   }
    // }
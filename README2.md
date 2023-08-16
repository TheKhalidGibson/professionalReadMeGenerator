# 09 Node.js Challenge: My Professional README Generator

## My Task

Projects on GitHub can have the capacity to be open sourced. This means that the source code is freely available to be contributed to, modified, or used by anyone who accesses it. This makes room for interactive collaborations and allowing a "community" of developers come together to achieve one common goal. It's important for these projects to have a high quality README because users need to know what this project is for, how to use it, how to install it, how to address issues, and how to add contributions if that is even allowed. 

This README generator allows developers to be able to quickly create a professional README and dedicate most of their time to the development phase of their project.

My Task is to create an application in the command-line that uses node, Inquirer packages, and README guidelines to accomplish the objective stated above.

Since this application is not based upon the browser, being that node a backend tool to run JavaScript, I have created a walkthrough video showing the functionality of the application.

## User Story

```
AS A developer
I WANT other developers to be able to focus on creation
WITH THAT in mind I have created a professional README Generator
SO THAT developers can quickly check off this important step and focus more on their application development
```

## Acceptance Criteria

```
GIVEN a command-line application that works through user input
WHEN I am prompted with criteria qualifiers for my application repository
THEN a high-quality, professional README.md is generated
WHEN I am presented with those qualifiers in the prompt my README will then include sections for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter details into the other sections
THEN those sections will display my input and selections as well
WHEN making a selection for the License since this is a list prompt type
I WILL THEN make a choice between a few licenses
THEN based upon the option I have chosen a badge is added that correlates with my selection
WHEN I reach the final prompt
THEN I will provide a preferred method of communication for the purpose of answering any possible questions
THEN once all prompts have been responded to a professional README.md will be generated and appear in my file explorer
```

## Getting Started

These are some of the guidelines that helped me get started:

* I created a `.gitignore` file and included `node_modules/` and `.DS_Store/`. This was so that my `node_modules/` directory was not tracked and did not show up in my repository. The `.gitignore` file was created before I installed any npm dependencies.

* I made certain that my repo included a `package.json` with the required dependencies. I used `npm init` to do so.

* I included a video as well to walk through the applications functions since it does not run in the browser this demonstration will help the user visualize its use.

* I included screenshots as well just incase additional visual aid would help conceptualize its purpose.

## Screenshots

![Alt text](./assets/image.png)

![Alt text](./assets/image-1.png)

![Alt text](./assets/image-2.png)

![Alt text](./assets/image-3.png)


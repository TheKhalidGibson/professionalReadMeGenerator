import inquirer from "inquirer";


inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "What's your first name",
      },
      {
        type: 'input',
        name: 'last_name',
        messsage: "What's your last name",
        default(){
            return 'Doe';
        },
      },

    ])
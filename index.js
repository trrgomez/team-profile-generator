const generatePage = require("./src/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const {writeFile, copyFile} = require('./utils/generate-site.js')

const team = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager of this team?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the manager's ID",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Please enter the manager's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter the manager's email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the manager's office number",
      validate: (officeNumber) => {
        if (officeNumber) {
          return true;
        } else {
          console.log("Please enter an offic number!");
          return false;
        }
      },
    },
  ]).then(answers => {
    const { name, id, email, officeNumber } = answers;
    const manager = new Manager(name, id, email, officeNumber);
  
    team.push(manager);
    console.log(manager);
  });
};

const promptEmployee = () => {
  console.log(`
    =================
    Adding employees to the team
    =================
    `);

  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Please choose your employee's role",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What's the name of the employee?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter an employee's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter the employee's ID",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Please enter an employee's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter the employee's email",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter an employee's email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "Enter the employee's github username.",
      when: (input) => input.role === "Engineer",
      validate: (username) => {
        if (username) {
          return true;
        } else {
          console.log("Please enter the employee's github username!");
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school",
      when: (input) => input.role === "Intern",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Please enter the intern's school!");
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAddEmployee",
      message: "Would you like to add more team members?",
      default: false,
    },
  ]).then(answers => {
    let {name, id, email, role, username, school, confirmAddEmployee} = answers;
    let employee
    
    if(role === "Engineer"){
        employee = new Engineer(name, id, email, username)
        console.log(employee)
    }else if (role === "Intern"){
        employee = new Intern(name, id, email, school)
        console.log(employee)
    }else {
        return false
    }

    team.push(employee)

    if(confirmAddEmployee){
        return promptEmployee(team)
    }else {
        return team
    }
  });
};

promptUser()
.then(promptEmployee)
.then(generateData => {
  return generatePage(generateData)
})
.then(pageHTML => {
  return writeFile(pageHTML)
})
.then(writeFileResponse => {
  console.log(writeFileResponse)
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse)
})
.catch(err => {
  console.log(err)
})

 

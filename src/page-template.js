const generateManager = function (manager) {
    return `
    <div class="card bg-light m-2" style="max-width: 30rem">
      <div class="card-header bg-primary text-light">
        <h3>${manager.name}</h3>
        <div>
          <i class="fas fa-mug-hot"></i>
          <span class="pl-1">Manager</span>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">
          <ul>
            <li>ID: ${manager.id}</li>
            <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li>Office number: ${manager.officeNumber}</li>
          </ul>
        </p>
      </div>
    </div>
    `;
  };
  
  const generateEngineer = function (engineer) {
    return `
    <div class="card bg-light m-2" style="max-width: 30rem">
      <div class="card-header bg-primary text-light">
    <h3>${engineer.name}</h3>
      <div>
       <i class="fas fa-glasses"></i>
       <span class="pl-1">Engineer</span>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">
      <ul>
        <li>ID: ${engineer.id}</li>
        <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li>Github: <a href="https://github.com/${engineer.username}">${engineer.username}</a></li>
      </ul>
      </p>
    </div>
  </div>
    `;
  };
  
  const generateIntern = function(intern){
    return `
    <div class="card bg-light m-2" style="max-width: 30rem">
    <div class="card-header bg-primary text-light">
      <h3>${intern.name}</h3>
      <div>
        <i class="fas fa-user-graduate"></i>
        <span class="pl-1">Intern</span>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">
        <ul>
          <li>ID: ${intern.id}</li>
          <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li>School: ${intern.school}</li>
        </ul>
      </p>
    </div>
  </div>
    `
  }
  
  const generatePage = function (templateData) {

    let teamArr = []

    templateData.forEach((employee) => {
      switch(employee.getRole()){
        case "Manager":
          teamArr.push(generateManager(employee))
          break;
        case "Engineer":
          teamArr.push( generateEngineer(employee))
          break;
        case "Intern":
          teamArr.push(generateIntern(employee))
          break;
      }
      
    });

  
    const employeeCards = teamArr.join('')
  
    const teamRoster = generateHTML(employeeCards)
  
    return teamRoster;
  };
  
  const generateHTML = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>Document</title>
      </head>
      <body>
        <header class="text-center text-light bg-danger d-flex justify-content-center align-items-center">
          <h1>My Team</h1>
        </header>
        <div class="container">
          <div class="row d-flex flex-wrap justify-content-center mt-5">
          <!--Cards go here -->
          ${employeeCards}
          </div>
        </div>
      </body>
    </html>
  
    `;
  };
  
  module.exports = generatePage;
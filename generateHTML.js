
// function to create cards based on employee object
const cardTemplate = (employeeObject) => {
    let roleInfoTitle;
    let roleInfo;
    switch(employeeObject.getRole()) {
        case 'Manager':
            roleInfoTitle = "Office Number: ";
            roleInfo = employeeObject.getOffice();
            break;
        case 'Engineer':
            roleInfoTitle = "Github: ";
            roleInfo = employeeObject.getGithub();
            break;
        case 'Intern':
            roleInfoTitle = "School: ";
            roleInfo = employeeObject.getSchool();
            break;
    }
    return `<div class="card col-2 mx-2 mb-5 p-3">
              <div class="card-header bg-info text-white">
                  <h2>${employeeObject.getName()}</h2>
                  <h3>${employeeObject.getRole()}</h3>
              </div>
              <div class="card-body bg-light">
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Email: <a href=${employeeObject.getEmail()}>${employeeObject.email}</a></li>
                      <li class="list-group-item">${employeeObject.getID()}</li>
                      <li class="list-group-item">${roleInfoTitle} ${roleInfo}</li>
                    </ul>
              </div>
          </div>`
}

// function to handle generating the HTML file based on user input
// pass in array of employee objects
const generateHTML = (employees) =>
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="./dist/styles.css">
      <title>Document</title>
  </head>
  
  <body>
      <div class="row bg-danger justify-content-center col-12 mb-3 text-white">
          <h1>My Team</h1>
      </div>
      <div class="row justify-content-center">
         
        ${employees.map((e) => cardTemplate(e)).join()}
  
      </div>
  </body>
  
  </html>`;

  module.exports = generateHTML;
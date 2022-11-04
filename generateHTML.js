const inquirer = require('inquirer');
const fs = require('fs');

// function to handle generating the HTML file based on user input
const generateHTML = ({  }) =>
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
  </head>
  
  <body>
      <div class="row bg-danger justify-content-center col-12 mb-3 text-white">
          <h1>My Team</h1>
      </div>
      <div class="row justify-content-center">
          <div class="card col-2 mx-2 mb-5 p-3">
              <div class="card-header bg-info text-white">
                  <h1>Name</h1>
                  <h2>Role</h2>
              </div>
              <div class="card-body bg-light">
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">email</li>
                      <li class="list-group-item">id</li>
                      <li class="list-group-item">github</li>
                    </ul>
              </div>
          </div>
  
      </div>
  </body>
  
  </html>`;
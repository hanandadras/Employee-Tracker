//dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

//connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    //YourMysql username
    user: 'root',
    // port: 5000,
    //Your Mysql Password
    password: '1234',

    database: 'employee_tracker'
  });


  connection.connect()
//TO DO:
//view all departments, view all roles, view all employees, 
//add a department, add a role, add an employee, 
//and update an employee role

  const menu = () => {
    inquirer.prompt({
      name: "choices",
      type: "list",
      message: "which choice would like to pick?",
      //add each, update each, add employee role
      choices: ["viewAllDepartments", "viewAllRoles", "viewAllEmployees", "addDepartment","addRole", "addEmployee", "UpdateEmployeeRole", "exit"]
    }).then(function (answer) {
      if (answer.choices === "viewAllDepartments") {
        viewAllDepartments();
      }
      else if (answer.choices === "viewAllRoles") {
        viewAllRoles();
      }
      else if (answer.choices === "viewAllEmployees") {
        viewAllEmployees();
      }
      else if (answer.choices === "addDepartment") {
        addDepartment();
      }
      else if (answer.choices === "addRole") {
        addRole();
      }
      else if (answer.choices === "addEmployee") {
        addEmployee();
      }
      else if (answer.choices === "updateEmployeeRole") {
        updateEmloyeeRole();
      }
      
      else if (answer.choices === "exit") {
        connection.end();
      }
    });
  }
  viewAllDepartments = () => {
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) {throw err} else {
      console.table(res);
      }
    });
    menu()
  }
  viewAllRoles = () => {
    connection.query("SELECT id, title, salary FROM role", (err, res) => {
      if (err) throw err;
      role = res;
    });
  }
  viewAllEmployees = () => {
    connection.query("SELECT id, first_name, last_name, CONCAT_WS ('', first_name, last_name) AS employee FROM employee", (err, res) => {
      if (err) throw err;
      allEmployees = res;
    });
  }
  //ADD D
  addDepartment = () => {
    connection.query("SELECT id, first_name, last_name, CONCAT_WS ('', first_name, last_name) AS employee FROM employee", (err, res) => {
      if (err) throw err;
      employee = res;
    });
  }
  
  addChoice = () => {
    inquirer.prompt([
      {
        name: "add",
        type: "list",
        message: "What do you want to add?",
        choices: ["department", "role", "employee", "exit"]
      }
    ]).then(function (answer) {
      if (answer.add === "department") {
        console.log("add a new " + answer.add);
        addDepartment();
      }
      else if (answer.add === "role") {
        console.log("add a new " + answer.add);
        addRole();
      }
      else if (answer.add === "employee") {
        console.log("add a new " + answer.add);
        addEmployee();
      }
      else if (answer.add === "manager") {
        console.log("add a new " + answer.add);
        addManager();
      }
      else if (answer.add === "exit") {
        console.log("Thank you!");
        connection.end();
      }
    })
  };


  
  menu()
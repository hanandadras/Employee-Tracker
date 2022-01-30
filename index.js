const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = require('mysql2/typingssql/lib/Connection/my');

//connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    //YourMysql username
    user: 'root',
    //Your Mysql Password
    password: '1234',
    database: 'employee_tracker'
  });

  connection.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = connection;


  const menu = () => {
    inquirer.prompt({
      name: "choices",
      type: "list",
      message: "which choice would like to pick?",
      choices: ["view", "add", "delete", "update", "exit"]
    }).then(function (answer) {
      if (answer.choices === "view") {
        viewChoice();
      }
      else if (answer.choices === "add") {
        addChoice();
      }
      else if (answer.choices === "delete") {
        deleteChoice();
      }
      else if (answer.choices === "update") {
        updateChoice();
      }
      else if (answer.choices === "exit") {
        connection.end();
      }
    });
  }
  getRole = () => {
    connection.query("SELECT id, title FROM role", (err, res) => {
      if (err) throw err;
      role = res;
    });
  }
  getDepartment = () => {
    connection.query("SELECT id, name FROM department", (err, res) => {
      if (err) throw err;
      department = res;
    });
  }
  getManager = () => {
    connection.query("SELECT id, first_name, last_name, CONCAT_WS ('', first_name, last_name) AS manager FROM employee", (err, res) => {
      if (err) throw err;
      manager = res;
    });
  }
  
  getEmployee = () => {
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
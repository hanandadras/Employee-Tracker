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


connection.connect(function (err) {
  if (err) throw err
})
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
    choices: ["viewAllDepartments", "viewAllRoles", "viewAllEmployees", "addDepartment", "addRole", "addEmployee", "UpdateEmployeeRole", "exit"]
  }).then(function (answer) {
    if (answer.choices === "viewAllDepartments") {
      console.table('Answer:', answer.choices);
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

const viewAllDepartments = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) { throw err } else {
      console.table(res);
      menu()
    }
  });
}

const viewAllRoles = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    menu()
  });
}
const viewAllEmployees = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    menu()
  });
}

const addDepartment = () => {
  connection.query("SELECT id, first_name, last_name, CONCAT_WS ('', first_name, last_name) AS employee FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    menu()
  });
}


const addRole = () => {
  connection.query("SELECT id, first_name, last_name, CONCAT_WS ('', first_name, last_name) AS employee FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    menu()
  });
}

const addEmployee = () => {
  connection.query("SELECT id, first_name, last_name, CONCAT_WS ('', first_name, last_name) AS employee FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    menu()
  });
}


const updateEmployeeRole = () => {
  connection.query("SELECT id, first_name, last_name, CONCAT_WS ('', first_name, last_name) AS employee FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    menu()
  });
}



const addChoice = () => {
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
    else if (answer.add === "exit") {
      console.log("Thank you!");
      connection.end();
    }
  })
};


menu()
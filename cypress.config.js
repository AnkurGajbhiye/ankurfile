const { defineConfig } = require("cypress");
const mysql = require("mysql");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      })
    },
     "env":{

      "db": {
        "host": "127.0.0.1",
        "user": "root",
        "password": "W@2915djkq#"
      }
     }
  },
});

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}
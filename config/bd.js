//MySql
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "ls-c7d991a3ebc224039c548c0ed136cf5097163e52.cnehlc6kzgb0.us-east-1.rds.amazonaws.com",
  user: "dbmasteruser",
  password: "9|Tgfx^R<L+FAe$A=Ir(s>Jg1utr]-z2",
  database: "testoasis",
});


//Check connect
connection.connect((error) => {
  if (error) throw error;
  console.log("Database server running!");
});

module.exports = connection;

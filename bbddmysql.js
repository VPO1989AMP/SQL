const mysql = require("mysql8");
//import {pass} from "./password.js"
//console.log(pass)

const pool = mysql.createPool({
    //connectionLimit:10,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Aa_Aa_09038942",
    database: "northwind",
});

function q(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, function(error, results, fields) {
            if (error) reject(error);
            return resolve(results);
        });
    });
}

q("select * from Customers limit 10 ").then(datos => {
    console.log(datos);
}).catch(err => {
    console.log(err);
});

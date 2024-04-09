const { Pool } = require("pg");
const pass = require('./password.js');

const pool = new Pool({
    user: "postgres",
    password: pass,
    database: "northwind",
    host: "localhost",
    port: 5437
});

function q(sql, parametros) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) reject(err);
            client.query(sql, parametros, (err, result) => {
                done();
                if (err) {
                    reject(err);
                } else {
                    resolve(result.rows);
                }
            });
        });
    });
}

q("select * from customers", []).then(rows => {
    console.log(rows);
}).catch(e => {
    console.log(e);
});

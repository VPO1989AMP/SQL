const pass = require('./password.js')
console.log(pass)
const mssql = require("mssql")

const config = {
    user: "sa",
    password: pass,
    database:"northwind",
    host:"localhost",
    port:1433,
    pool:{
        min:0,
        max:10,
        idleTimeoutMilis: 30000,
    },
    options:{
        encrypt: true,
        trustServerCertificates: true
    }
}

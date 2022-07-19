const{ 
    createPool
} = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "CalebMz117",
    database:"esports_management_system",
    connectionLimit: 10
})

pool.query(`select * from player where playerID = ?`,[117], (err, result, fields) => {
    if (err){
        return console.log(err);
    }
    return console.log(result);

})

let sql = pool.query(`select * from player where playerID = ?`,[117])

module.exports = pool

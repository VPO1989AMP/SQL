const oracledb = require('oracledb')

var pool = null 
try {
    oracledb.initOracleClient({
        libDir: "c:\\clienteOracle"
    })
} catch(error){
    console.log(error)
}

async function getPool(con){
    return new Promise(async(resolve, reject) =>{
        if (pool) resolve(pool)
        try{
            pool = await oracledb.createPool(con)
            resolve(pool)
        }catch(error){
            reject(error)
        }
    })
}

async function q(sql, parametros){
    let connection
    try{
        await getPool({
            user:"C##datos",
            password:"datos",
            connectString:"localhost:152/XE",
            poolAlias:"curso"
        })
        connection = await oracledb.getConnection("curso")
        const resultados  =await connection.execute(sql, parametros,{
            outFormat: oracledb.OBJECT
        })
        return resultados
    } catch (error){
        return error
    } finally{
        if (connection) {
            try{
                //cierro la connexión
                await connection.close();
            } catch(err){
                return(err)
            }
        }
    }
}

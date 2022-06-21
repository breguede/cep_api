const connStr = require('../../config/dbConfig.js');
const sql = require('mssql');


async function analista(request, response) {
    if(request.query.SECRET_KEY !== process.env.SECRET_KEY){
        response.send('sem autorizacao')
    }
    let pool = await sql.connect(connStr)
    let analistas = await pool.request()
      .query(`Select * from Rede_WAnalistas`);
    const resultado = analistas.recordsets

    response.setHeader('Cache-Control', 's-maxage=10,stale-while-revalidate');

    response.json(resultado[0]);

}

export default analista;
const sql = require('mssql');
const connStr = require('../../../config/dbConfig')


export default async function handler(request, response) {
    if(request.query.SECRET_KEY !== process.env.SECRET_KEY){
        response.send('sem autorizacao')
    }
    const { id } = request.query
    let pool = await sql.connect(connStr)
        let pacientes = await pool.request()
          .query(`Select * from Rede_WPacientes WHERE cod_pac = ${id}`);
        const resultado = pacientes.recordsets
    
    response.setHeader('Cache-Control','s-maxage=10,stale-while-revalidate');
    
    response.json(resultado[0]);
    
  }
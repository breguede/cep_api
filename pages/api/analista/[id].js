const sql = require('mssql');
const connStr = require('../../../config/dbConfig')


export default async function handler(request, response) {
    if(request.query.SECRET_KEY !== process.env.SECRET_KEY){
        return response.send('sem autorizacao')
    }
    const { id } = request.query
    let pool = await sql.connect(connStr.default)
        
      let analistas = await pool.request()
          .query(`Select * from Rede_WAnalistas WHERE cod_analista = ${id}`);
        const resultado = await analistas.recordsets

        var normalResults = resultado.map((mysqlObj, index) => {
          return Object.assign({}, mysqlObj);
      });
     


    
   response.setHeader('Cache-Control','s-maxage=10,stale-while-revalidate');
    
     return response.json(normalResults);
    
  }
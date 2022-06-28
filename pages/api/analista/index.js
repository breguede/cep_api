const sql = require('mssql');
const connStr = require('../../../config/dbConfig')

async function analista(request, response) {
  if (request.query.SECRET_KEY !== process.env.SECRET_KEY) {
    return response.send('sem autorizacao')
  }
  const { method } = request;

  switch (method) {
    case "GET":
      try {
        let pool = await sql.connect(connStr.default)
        let analistas = await pool.request()
          .query(`Select * from Rede_WAnalistas`);
        const resultado = analistas.recordsets

        response.setHeader('Cache-Control', 's-maxage=10,stale-while-revalidate');

        return response.json(resultado[0]);
      } catch (error) {
        console.log(error);
      }
      case "POST":
      try {
        response.status(200).send('POST REALIZADO COM SUCESSO!!!')
      } catch (error) {
        console.log(error);
      }
  }

}

export default analista;
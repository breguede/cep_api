const sql = require('mssql');
const connStr = require('../../../config/dbConfig')

async function paciente(request, response) {
  if (request.query.SECRET_KEY !== process.env.SECRET_KEY) {
    response.send('sem autorizacao')
  }
  const { method } = request;

  switch (method) {
    case "GET":
      try {

        await sql.connect(connStr.default)

        // para pesquisar paciente pelo nome precisa enviar no body a propriedade nome
        if (request.body) {
          const { nome } = request.body;
          const resultado = await sql.query`select * from Rede_WPacientes WHERE nom_pac LIKE '%' + ${nome} + '%'`
          return response.status(200).json(resultado.recordset)
        }

        // caso vazio traz todos os pacientes - aqui condicionado a um período menor devido ao tamanho da base
        const resultado = await sql.query`select* from Rede_WPacientes WHERE cod_pac > 16000`;
        response.setHeader('Cache-Control', 's-maxage=10,stale-while-revalidate');
        return response.status(200).json(resultado.recordset);
      } 
      catch (error) {
        console.log(error);
      }
    // case "POST":
    // try {
    //   response.status(200).send('POST REALIZADO COM SUCESSO!!!')
    // } catch (error) {
    //   console.log(error);
    // }
  }

}

export default paciente;
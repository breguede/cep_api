const sql = require('mssql');
const Server = process.env.SERVER;

const Database = process.env.DATABASE;
const User = process.env.USER;
const Password = process.env.PASSWORD;

const connStr = {   
    server: Server,
    database: Database,
    port: 8529,
    user: User,
    password: Password,
    options: {
      trustedConnection: true,
      trustServerCertificate: true,
      cryptoCredentialsDetails: {
         minVersion: 'TLSv1'
    }
  },
  debug: true,
  parseJSON: true
  }; 
 
  export default connStr;
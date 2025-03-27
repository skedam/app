const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'sqlserver@123',
  server: '192.168.0.99\\SQLEXPRESS',
  database: 'DeltaPOSDashboard',
};

async function connect() {
  try {
    await sql.connect(config);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    // You might want to throw the error here to handle it in the calling code
    throw err;
  }
}

module.exports = {
  connect,
};

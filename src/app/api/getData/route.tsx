import {connect} from '../../../dbConfig/database';
import { NextRequest, NextResponse } from 'next/server';
import sql from 'mssql';

// Database connection configuration
const dbConfig = {
  server: '192.168.0.99\\SQLEXPRESS',
  user: 'sa',
  password: 'sqlserver@123',
  database: 'DeltaPOSDashboard',
  options: {
    encrypt: true, // Use this option to enable encryption
    trustServerCertificate: true, // Trust the self-signed certificate
  },
};

// Function to execute the SQL query
const executeQuery = async (query) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Connect to the database on server start
connect();

export async function GET(request : NextRequest) {
  try {
    const result = [];
    const query = 'select * from DPMS_VW_Depts';
    const query1 = 'select * from DPMS_VW_Depts_Complete';
    const query2 = 'select * from DPMS_VW_Amount';
    const result1 = await executeQuery(query);
    const result2 = await executeQuery(query1);
    const result3 = await executeQuery(query2);

    result.push(result1)
    result.push(result2)
    result.push(result3)
    return NextResponse.json({
      result
    });
  } catch (err : any) {
    return NextResponse.json({
      error: err.message,
    });
  }
}

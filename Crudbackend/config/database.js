import mysql from 'mysql2';

const db = mysql.createConnection({
  host: '34.93.75.171',         // 🔁 Your Cloud SQL public IP
  user: 'datasolve',            // ✅ Your SQL username
  password: 'datasolve@2025',   // ✅ Your SQL password
  database: 'cruddb',           // ✅ Your database name
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
    return;
  }
  console.log('✅ MySQL connected successfully to database: cruddb');
});

export default db;



import mysql from 'mysql2'

export const mysqlPools = mysql.createPool(process.env.MYSQL_URL)
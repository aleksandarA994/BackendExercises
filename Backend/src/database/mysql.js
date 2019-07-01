import mysql from 'mysql';
import mysqlConfigs from '../../config/mysql';
import models from '../migrations/createTables';
// import { userInfo } from 'os';

const dbConfig = mysqlConfigs['dev'];
const { usersCreateModel } = models;
const con = mysql.createConnection(dbConfig);

// const postsCreateModel = `
//   CREATE TABLE IF NOT EXISTS posts (
//     id INT NOT NULL,
//     firstName CHAR(25),
//     lastName CHAR(25),
//     username VARCHAR(50) NOT NULL,
//     email VARCHAR(75) NOT NULL
//   )
// `;
con.connect(() => {
  console.log('db connection is on');
  con.query(usersCreateModel);
  // con.query(postsCreateModel);
});

export default { con };
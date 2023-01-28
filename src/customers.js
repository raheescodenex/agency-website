import mysql from "mysql2/promise";

const mysqlConfig = {
  host: "localhost",
  port: 3000,
  user: "root",
  database: "agency",
  password: " ",
};

/**
 *
 * TODO: IMPLEMENT FUNCTIONALITY TO CLOSE MYSQL CONNECTIONS IN ALL FUNCTIONS
 */

const getCustomers = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `customers`");
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getCustomerById = async (customerId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT customers WHERE id = $(customerId)`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const customers = {
  getCustomers,
  getCustomerById,
};
module.exports = customers;
